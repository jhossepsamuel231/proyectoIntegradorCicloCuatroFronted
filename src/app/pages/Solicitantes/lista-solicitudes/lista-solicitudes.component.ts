import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/Solicitud.model';
import { solicitudService } from 'src/app/services/Solicitud.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent implements OnInit {

  solicitud: Solicitud[] = [];

  constructor(private solicitudService: solicitudService) { }

  ngOnInit(): void {
    this.listadoDeSolciitudes();
  }

  listadoDeSolciitudes() {
    const usuario_session: any = JSON.parse(sessionStorage.getItem('usuarioLogged'));
    let idUsuario: number = usuario_session.idUsuario;

    this.solicitudService.listadoSolicitudPorUsuario(+idUsuario).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.solicitud = resp;
      }
    })
  }

}


