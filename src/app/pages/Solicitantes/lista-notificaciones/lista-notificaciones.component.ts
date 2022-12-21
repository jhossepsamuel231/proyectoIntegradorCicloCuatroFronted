import { Component, OnInit } from '@angular/core';
import { Notificacion } from 'src/app/models/Notificacion.model';
import { solicitudService } from 'src/app/services/Solicitud.service';

@Component({
  selector: 'app-lista-notificaciones',
  templateUrl: './lista-notificaciones.component.html',
  styleUrls: ['./lista-notificaciones.component.css']
})
export class ListaNotificacionesComponent implements OnInit {

  notificacion: Notificacion[] = [];

  constructor(private solicitudService: solicitudService) { }

  ngOnInit(): void {
    this.listadoDeNotificaciones();
  }

  listadoDeNotificaciones() {
    const usuario_session: any = JSON.parse(sessionStorage.getItem('usuarioLogged'));
    let idUsuario: number = usuario_session.idUsuario;

    this.solicitudService.listadoNotificacionPorUsuario(+idUsuario).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.notificacion = resp;
      }
    })
  }

  verDoc(documento: string) {
    window.open(documento, "_blank");
  }
}
