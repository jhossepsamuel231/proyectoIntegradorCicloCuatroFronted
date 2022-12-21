import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/models/Solicitud.model';
import { solicitudService } from 'src/app/services/Solicitud.service';

@Component({
  selector: 'app-lista-de-expedientes',
  templateUrl: './lista-de-expedientes.component.html',
  styleUrls: ['./lista-de-expedientes.component.css']
})
export class ListaDeExpedientesComponent implements OnInit {



  solicitud: Solicitud[] = [];

  constructor(private router: Router, private solicitudService: solicitudService) { }



  ngOnInit(): void {
    this.listarParaMesaDePartes();
    console.log("hola")
  }


  listarParaMesaDePartes() {
    console.log("funcion")
    this.solicitudService.listarSoliParaMesaDePartes().subscribe({
      next: (solicitud: Solicitud[]) => {
        this.solicitud = solicitud;
        console.log(solicitud);
      }
    })
  }

  cambiar() {
    this.router.navigate(['/admin-panel/generar-expediente']);
  }
}
