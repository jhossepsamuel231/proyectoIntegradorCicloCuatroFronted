import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/models/Solicitud.model';
import { GerenciaDeDesarrolloSocialService } from 'src/app/services/GerenciaDeDesarrolloSocial.service';

@Component({
  selector: 'app-ver-expediente',
  templateUrl: './ver-expediente.component.html',
  styleUrls: ['./ver-expediente.component.css']
})
export class VerExpedienteComponent implements OnInit {

  dato: string = "1";

  solicitud: Solicitud[] = [];

  constructor(private router: Router, private gerenciaDeDesarrolloSocialService: GerenciaDeDesarrolloSocialService) { }

  ngOnInit(): void {
    this.ListarExpedientesPrimeraRevision();
  }


  ListarExpedientesPrimeraRevision() {
    this.gerenciaDeDesarrolloSocialService.ListarParaPrimeraRevision().subscribe({
      next: (solicitud: Solicitud[]) => {
        this.solicitud = solicitud;
        console.log(solicitud);
      }
    })
  }

  guardarIdSolicitud(idSolicitud: any) {
    localStorage.setItem('idSolicitud', idSolicitud);
    this.router.navigate(['/admin-panel/ver-documento-expedientes']);
  }
}
