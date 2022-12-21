import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Documento } from 'src/app/models/Documento';
import { GerenciaDeDesarrolloSocialService } from 'src/app/services/GerenciaDeDesarrolloSocial.service';
import { solicitudService } from 'src/app/services/Solicitud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-documento-expediente',
  templateUrl: './ver-documento-expediente.component.html',
  styleUrls: ['./ver-documento-expediente.component.css']
})
export class VerDocumentoExpedienteComponent implements OnInit {

  documento: Documento[] = [];

  constructor(private router: Router, private gerenciaService: GerenciaDeDesarrolloSocialService, private solicitudService: solicitudService) { }

  ngOnInit(): void {
    this.listarDocPorID();
  }

  cambiar() {
    this.router.navigate(['/admin-panel/ver-expedientes']);
  }

  listarDocPorID() {
    const idSolicitud = localStorage.getItem("idSolicitud")
    this.gerenciaService.ListarSoliDocParaPrimeraRevision(idSolicitud).subscribe({
      next: (documento: Documento[]) => {
        this.documento = documento;
        console.log(documento);

      }
    })
  }

  aceptarSolicitudASubGerencia() {
    const idSolicitud = localStorage.getItem("idSolicitud")
    this.solicitudService.DerivarSolicitud(idSolicitud, "GerenciaUno").subscribe({
      next: (resp: any) => {
        console.log(resp);
        localStorage.removeItem("idSolicitud");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Solicitud Aceptada y Enviada Correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin-panel/ver-expedientes']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  rechazarSolicitud() {
    const idSolicitud = localStorage.getItem("idSolicitud")
    this.solicitudService.DerivarSolicitud(idSolicitud, "rechazar").subscribe({
      next: (resp: any) => {
        console.log(resp);
        localStorage.removeItem("idSolicitud");
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Solicitud Rechazada Correctamente',
          showConfirmButton: false,
          timer: 1700
        })
        this.router.navigate(['/admin-panel/ver-expedientes']);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  verDoc(documento: string) {
    window.open(documento, "_blank");
  }

}
