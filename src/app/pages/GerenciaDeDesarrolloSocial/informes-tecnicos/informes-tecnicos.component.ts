import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformeTecnico } from 'src/app/models/InformeTecnico.model';
import { GerenciaDeDesarrolloSocialService } from 'src/app/services/GerenciaDeDesarrolloSocial.service';

@Component({
  selector: 'app-informes-tecnicos',
  templateUrl: './informes-tecnicos.component.html',
  styleUrls: ['./informes-tecnicos.component.css']
})
export class InformesTecnicosComponent implements OnInit {

  informeTecnicos: InformeTecnico[] = [];

  constructor(private router: Router,
    private gerenciaService: GerenciaDeDesarrolloSocialService) { }

  ngOnInit(): void {
    this.listarSoliParaRegistrarResolucion();
  }

  listarSoliParaRegistrarResolucion() {
    this.gerenciaService.listarInformesTecnicosParaRegistroResolucion().subscribe({
      next: (informeTecnico: InformeTecnico[]) => {
        this.informeTecnicos = informeTecnico;
        console.log(informeTecnico);
      }
    })
  }

  verInformeTecnico(docInformeTecnico: any) {
    window.open(docInformeTecnico, "_blank");
  }

  guardarIdParaRegistrarResolucion(idInformeTecnico: any, idSolicitud: any) {
    localStorage.setItem('idInformeTecnico', idInformeTecnico)
    localStorage.setItem('idSolicitudParaRegistrarResolucion', idSolicitud);
    this.router.navigate(['/admin-panel/registrando-resolucion']);
  }

  /*  resolucion() {
     this.router.navigate(['/admin-panel/registrar-resolucion']);
   }
 
 
   notifi() {
     this.router.navigate(['/admin-panel/enviar-notificacion']);
   } */
}
