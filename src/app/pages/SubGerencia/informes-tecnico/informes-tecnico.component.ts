import { Component, OnInit } from '@angular/core';
import { ref } from '@firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, Storage, uploadBytes } from '@angular/fire/storage';
import { InformeTecnicoDto } from 'src/app/models/InformeTecnicoDto.model';
import { Router } from '@angular/router';
import { SubGerenciaDeDesarrolloSocialService } from 'src/app/services/SubGerenciaDesarrolloSocial.service';
import { solicitudService } from 'src/app/services/Solicitud.service';
import { Solicitud } from 'src/app/models/Solicitud.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informes-tecnico',
  templateUrl: './informes-tecnico.component.html',
  styleUrls: ['./informes-tecnico.component.css']
})
export class InformesTecnicoComponent implements OnInit {

  solicitud: Solicitud;

  informeTecnicoDto: InformeTecnicoDto = new InformeTecnicoDto();
  file: File;



  constructor(private storage: Storage,
    private router: Router,
    private subGerenciaService: SubGerenciaDeDesarrolloSocialService,
    private solicitudService: solicitudService) { }

  ngOnInit(): void {
    this.solicitudEncontrada();
  }

  seleccionarFile(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
  }

  async registrarInformeTecnico() {
    if (!this.informeTecnicoDto.resultado.trim()) {
      console.log("Rellena Datos");
      return;
    }
    console.log(this.informeTecnicoDto)
    const idSolicitud = localStorage.getItem('idSolicitudParaInforme');

    // Obtener el tipo de documento (pdf, xlsx, png)
    const tipo_documento = this.file.name.split('.').at(-1)!;

    // Asignar referencia a donde se subira el documento
    const imgRef = ref(this.storage, `files/${uuidv4()}.${tipo_documento}`)

    // Subir el documento
    const result = await uploadBytes(imgRef, this.file);

    // Obtener el url del documento
    const url = await getDownloadURL(result.ref);

    console.log(url);
    console.log('LLEGAMOS AQUIS');


    this.informeTecnicoDto.docInformeTecnico = url;
    console.log(this.informeTecnicoDto);

    this.subGerenciaService.registrarInformeTecnico(this.informeTecnicoDto, idSolicitud).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.solicitudService.DerivarSolicitud(idSolicitud, "subGerencia").subscribe({
          next: (resp: any) => {
            console.log(resp);
            localStorage.removeItem("idSolicitudParaInforme");
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Informe Tecnico Creado Correctamente',
              showConfirmButton: false,
              timer: 1700
            })
            this.router.navigate(['/admin-panel/lista-expedientes']);

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

  resultadoAceptado() {
    this.informeTecnicoDto.resultado = "Aceptado";
  }

  resultadoRechazado() {
    this.informeTecnicoDto.resultado = "Rechazado";
  }

  solicitudEncontrada() {
    const idSolicitud = localStorage.getItem("idSolicitudParaInforme");
    this.solicitudService.buscarSolicitudPorId(+idSolicitud).subscribe({
      next: (solicitud: Solicitud) => {
        this.solicitud = solicitud;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
