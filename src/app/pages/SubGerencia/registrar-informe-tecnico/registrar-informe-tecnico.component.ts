import { Component, OnInit } from '@angular/core';
import { ref } from '@firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, Storage, uploadBytes } from '@angular/fire/storage';
import { Documento } from 'src/app/models/Documento';
import { DocumentoServiceService } from 'src/app/services/Documento.service';
import { Router } from '@angular/router';
import { SubGerenciaDeDesarrolloSocialService } from 'src/app/services/SubGerenciaDesarrolloSocial.service';
import { Solicitud } from 'src/app/models/Solicitud.model';

@Component({
  selector: 'app-registrar-informe-tecnico',
  templateUrl: './registrar-informe-tecnico.component.html',
  styleUrls: ['./registrar-informe-tecnico.component.css']
})
export class RegistrarInformeTecnicoComponent implements OnInit {

  documento: Documento = new Documento();

  documentos: Documento[] = [];

  solicitud: Solicitud[] = [];

  emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  file: File;

  codigo: string = "";

  constructor(private storage: Storage,
    private documentoService: DocumentoServiceService,
    private router: Router,
    private subGerenciaService: SubGerenciaDeDesarrolloSocialService) { }

  ngOnInit(): void {
    this.getDocumentos();
  }

  buscarSoliParaRegistarInformeTecnico() {
    this.subGerenciaService.buscarSoliPorCodigoParaRegistrarInformeTecnico(this.codigo).subscribe({
      next: (solicitud: Solicitud[]) => {
        this.solicitud = solicitud;
      }
    })
  }

  getDocumentos() {
    this.documentoService.getDocumentos().subscribe({
      next: (documentos: Documento[]) => {
        this.documentos = documentos;
      }
    })
  }

  seleccionarFile(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];

  }



  goToLink(url_documento: string) {
    window.open(url_documento, "_blank");
  }

}
