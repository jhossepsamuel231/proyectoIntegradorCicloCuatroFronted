import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/models/Solicitud.model';
import { SubGerenciaDeDesarrolloSocialService } from 'src/app/services/SubGerenciaDesarrolloSocial.service';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.css']
})
export class ExpedientesComponent implements OnInit {

  solicitud: Solicitud[] = [];

  constructor(private router: Router, private subGerenciaService: SubGerenciaDeDesarrolloSocialService) { }

  ngOnInit(): void {
    this.listarParaSubirInformetecnico();
  }

  listarParaSubirInformetecnico() {
    this.subGerenciaService.listarParaSubirInformetecnico().subscribe({
      next: (solicitud: Solicitud[]) => {
        this.solicitud = solicitud;
        console.log(solicitud);
      }
    })
  }

  verDocuParaSubirInforme(idSolicitud: any) {
    localStorage.setItem('idSolicitudParaInforme', idSolicitud);
    this.router.navigate(['/admin-panel/documentos-solicitud']);
  }

}
