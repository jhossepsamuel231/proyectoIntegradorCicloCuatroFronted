import { Component, OnInit } from '@angular/core';
import { ref } from '@firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, Storage, uploadBytes } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { InformeTecnico } from 'src/app/models/InformeTecnico.model';
import { Notificacion } from 'src/app/models/Notificacion.model';
import { GerenciaDeDesarrolloSocialService } from 'src/app/services/GerenciaDeDesarrolloSocial.service';
import { solicitudService } from 'src/app/services/Solicitud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enviar-notificacion',
  templateUrl: './enviar-notificacion.component.html',
  styleUrls: ['./enviar-notificacion.component.css']
})
export class EnviarNotificacionComponent implements OnInit {



  informeTecnico: InformeTecnico;

  codigoInformeTecnico: string;

  notificacion: Notificacion = new Notificacion();

  notificaciones: Notificacion[] = [];

  idSolicitud: any;

  emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  file: File;

  constructor(private storage: Storage, private gerenciaService: GerenciaDeDesarrolloSocialService, private router: Router, private solicitudService: solicitudService) { }

  ngOnInit(): void {
  }

  buscarPorCodigoInformeTecnico() {
    this.gerenciaService.buscarSolicitudParaRegistrarResolucion(this.codigoInformeTecnico).subscribe({
      next: (informeTecnico: InformeTecnico) => {
        this.informeTecnico = informeTecnico;
        this.idSolicitud = this.informeTecnico.solicitud.idSolicitud
        localStorage.setItem("idSoliParaEnvioDeNotificacion", this.idSolicitud);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  seleccionarFile(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];

  }

  async registrarFile() {

    const idSolicitud = localStorage.getItem('idSoliParaEnvioDeNotificacion');


    if (!this.notificacion.correoEnviado.trim() || !this.file) {
      console.log('COMPLETE LOS CAMPOS');
      return;
    }

    if (!this.emailRegex.test(this.notificacion.correoEnviado)) {
      console.log('EMAIL INVALIDO..');
      return;
    }
    console.log('PASAMOS LAS VALIDACIONES');
    console.log(this.notificacion);


    // Obtener el tipo de documento (pdf, xlsx, png)
    const tipo_documento = this.file.name.split('.').at(-1)!;

    // Asignar referencia a donde se subira el documento
    const imgRef = ref(this.storage, `notificaciones/${uuidv4()}.${tipo_documento}`)
    // Subir el documento
    const result = await uploadBytes(imgRef, this.file);
    // Obtener el url del documento
    const url = await getDownloadURL(result.ref);

    console.log(url);
    console.log('LLEGAMOS AQUIS');



    this.notificacion.documentoNotificacion = url;
    console.log(this.notificacion);

    this.gerenciaService.enviarNotificacion(this.notificacion, +idSolicitud).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.solicitudService.DerivarSolicitud(idSolicitud, "GerenciaDos").subscribe({
          next: (resp: any) => {
            console.log(resp);
            localStorage.removeItem("idSoliParaEnvioDeNotificacion")
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Notificacion Enviada Correctamente',
              showConfirmButton: false,
              timer: 1700
            })
            this.router.navigate(['/admin-panel/informes-tecnicos']);
          },
          error: (err) => {
            console.log(err);
          }
        })
        /* if (this.informeTecnico.resultado === "Aceptado") {

          this.solicitudService.DerivarSolicitud(idSolicitud, "GerenciaDos").subscribe({
            next: (resp: any) => {
              console.log(resp);
              this.router.navigate(['/admin-panel/informes-tecnicos']);
            },
            error: (err) => {
              console.log(err);
            }
          })
          return;
        }else{
          this.solicitudService.DerivarSolicitud(idSolicitud, "rechazar").subscribe({
            next: (resp: any) => {
              console.log(resp);
              this.router.navigate(['/admin-panel/informes-tecnicos']);
            },
            error: (err) => {
              console.log(err);
            }
          })
          return;
        } */

      },
      error: (err) => {
        console.log(err);

      }
    })

  }

  resultadoAceptado() {
    this.notificacion.resultadoNotificacion = "Aceptado";
  }

  resultadoRechazado() {
    this.notificacion.resultadoNotificacion = "Rechazado";
  }

  enviar() {
    this.router.navigate(['/admin-panel/dashboard']);
  }
}
