import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/Solicitud.model';
import { solicitudService } from 'src/app/services/Solicitud.service';

@Component({
  selector: 'app-generar-expediente',
  templateUrl: './generar-expediente.component.html',
  styleUrls: ['./generar-expediente.component.css']
})
export class GenerarExpedienteComponent implements OnInit {



  solicitud: Solicitud[] = [];

  constructor(private solicitudService: solicitudService) { }



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


  generarExp_codigo_derivar(solicitud: any) {
    this.solicitudService.DerivarSolicitud(solicitud, "mesaDePartes").subscribe({
      next: (resp: any) => {
        console.log(resp);

        this.listarParaMesaDePartes();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



}
