import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Documento } from 'src/app/models/Documento';
import { JuntaDirectiva } from 'src/app/models/JuntaDirectiva.model';
import { GerenciaDeDesarrolloSocialService } from 'src/app/services/GerenciaDeDesarrolloSocial.service';
import { solicitudService } from 'src/app/services/Solicitud.service';

@Component({
  selector: 'app-documentos-de-solicitud',
  templateUrl: './documentos-de-solicitud.component.html',
  styleUrls: ['./documentos-de-solicitud.component.css']
})
export class DocumentosDeSolicitudComponent implements OnInit {

  juntaDirectiva: JuntaDirectiva[] = [];

  documento: Documento[] = [];

  constructor(private router: Router, private gerenciaService: GerenciaDeDesarrolloSocialService,
    private solicitudService: solicitudService) { }

  ngOnInit(): void {
    this.listarDocPorID();
    this.listarJuntaDirectivaDelSolicitante();
  }

  listarDocPorID() {
    const idSolicitud = localStorage.getItem("solicitudEncontradaParaSubirInformeTecnico")
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

  volver() {
    this.router.navigate(['/admin-panel/registrar-informe-tecnico']);
  }

  listarJuntaDirectivaDelSolicitante() {
    const idSolicitud = localStorage.getItem('solicitudEncontradaParaSubirInformeTecnico');
    this.solicitudService.listarJuntaDirectivaDelSolicitante(+idSolicitud).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.juntaDirectiva = resp;
      }
    })
  }

}
