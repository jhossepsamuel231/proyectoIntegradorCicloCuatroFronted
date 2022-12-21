import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Documento } from 'src/app/models/Documento';
import { JuntaDirectiva } from 'src/app/models/JuntaDirectiva.model';
import { GerenciaDeDesarrolloSocialService } from 'src/app/services/GerenciaDeDesarrolloSocial.service';
import { solicitudService } from 'src/app/services/Solicitud.service';

@Component({
  selector: 'app-ver-documentos-solicitud',
  templateUrl: './ver-documentos-solicitud.component.html',
  styleUrls: ['./ver-documentos-solicitud.component.css']
})
export class VerDocumentosSolicitudComponent implements OnInit {

  juntaDirectiva: JuntaDirectiva[] = [];

  documento: Documento[] = [];

  constructor(private router: Router, private gerenciaService: GerenciaDeDesarrolloSocialService,
    private solicitudService: solicitudService) { }

  ngOnInit(): void {
    this.listarDocPorID();
    this.listarJuntaDirectivaDelSolicitante();
  }

  listarDocPorID() {
    const idSolicitud = localStorage.getItem("idSolicitudParaInforme")
    this.gerenciaService.ListarSoliDocParaPrimeraRevision(idSolicitud).subscribe({
      next: (documento: Documento[]) => {
        this.documento = documento;
        console.log(documento);

      }
    })
  }

  verDoc(documento: string) {
    window.open(documento, "_blank");
  }

  subirubirInforme() {
    this.router.navigate(['/admin-panel/informe-tecnico']);
  }

  listarJuntaDirectivaDelSolicitante() {
    const idSolicitud = localStorage.getItem('idSolicitudParaInforme');
    this.solicitudService.listarJuntaDirectivaDelSolicitante(+idSolicitud).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.juntaDirectiva = resp;
      }
    })
  }
}
