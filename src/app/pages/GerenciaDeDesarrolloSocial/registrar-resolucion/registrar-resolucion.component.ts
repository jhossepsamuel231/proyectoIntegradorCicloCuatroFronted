import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformeTecnico } from 'src/app/models/InformeTecnico.model';
import { GerenciaDeDesarrolloSocialService } from 'src/app/services/GerenciaDeDesarrolloSocial.service';

@Component({
  selector: 'app-registrar-resolucion',
  templateUrl: './registrar-resolucion.component.html',
  styleUrls: ['./registrar-resolucion.component.css']
})
export class RegistrarResolucionComponent implements OnInit {

  informeTecnicos: InformeTecnico;

  codigoInformeTecnico: string;

  informeTecnico: any[];

  constructor(private router: Router, private gerenciaService: GerenciaDeDesarrolloSocialService) { }

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
}
