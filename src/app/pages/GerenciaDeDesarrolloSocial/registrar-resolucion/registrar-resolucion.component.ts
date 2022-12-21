import { Component, OnInit } from '@angular/core';
import { ref } from '@firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, Storage, uploadBytes } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { InformeTecnico } from 'src/app/models/InformeTecnico.model';
import { ResolucionDto } from 'src/app/models/ResolucionDto';
import { GerenciaDeDesarrolloSocialService } from 'src/app/services/GerenciaDeDesarrolloSocial.service';
import { solicitudService } from 'src/app/services/Solicitud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-resolucion',
  templateUrl: './registrar-resolucion.component.html',
  styleUrls: ['./registrar-resolucion.component.css']
})
export class RegistrarResolucionComponent implements OnInit {

  informeTecnicos: InformeTecnico;

  codigoInformeTecnico: string;

  informeTecnico: any[];

  resolucionDto: ResolucionDto = new ResolucionDto();


  file: File;

  constructor(private storage: Storage, private router: Router,
    private gerenciaService: GerenciaDeDesarrolloSocialService,
    private solicitudService: solicitudService) { }

  ngOnInit(): void {
  }



  enviar() {
    this.router.navigate(['/admin-panel/dashboard']);
  }


  buscarPorCodigoInformeTecnico() {
    this.gerenciaService.buscarSolicitudParaRegistrarResolucion(this.codigoInformeTecnico).subscribe({
      next: (informeTecnico: InformeTecnico) => {
        this.informeTecnicos = informeTecnico;
        console.log(informeTecnico);
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

  async registrarResolucion() {

    const idSolicitud = localStorage.getItem('idSolicitudParaRegistrarResolucion');

    // Obtener el tipo de documento (pdf, xlsx, png)
    const tipo_documento = this.file.name.split('.').at(-1)!;

    // Asignar referencia a donde se subira el documento
    const imgRef = ref(this.storage, `resoluciones/${uuidv4()}.${tipo_documento}`)

    // Subir el documento
    const result = await uploadBytes(imgRef, this.file);

    // Obtener el url del documento
    const url = await getDownloadURL(result.ref);

    console.log(url);
    console.log('LLEGAMOS AQUIS');


    this.resolucionDto.documentoResolucion = url;
    console.log(this.resolucionDto);

    this.gerenciaService.registrarResolucion(this.resolucionDto, +idSolicitud).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.solicitudService.DerivarSolicitud(idSolicitud, "GerenciaDos").subscribe({
          next: (resp: any) => {
            console.log(resp);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Resolucion Registrada Correctamente',
              showConfirmButton: false,
              timer: 1700
            })
            this.router.navigate(['/admin-panel/dashboard']);
          },
          error: (err) => {
            console.log(err);
          }
        })

      },
      error: (err) => {
        console.log(err);
      }
    })


  }

}
