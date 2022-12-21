import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INivelOrganizacion } from 'src/app/interfaces/NivelOrganizacion.interface';
import { ITipoOrganizacion } from 'src/app/interfaces/TipoOrganizacion.interface';
import { IZonaUbicacion } from 'src/app/interfaces/ZonaUbicacion.interface';
import { Solicitud } from 'src/app/models/Solicitud.model';
import { solicitudDto } from 'src/app/models/SolicitudDto.model';
import { NivelOrganizacionService } from 'src/app/services/NivelOrganizacion.service';
import { solicitudService } from 'src/app/services/Solicitud.service';
import { TipoOrganizacionService } from 'src/app/services/TipoOrganizacion.service';
import { ZonaUbicacionService } from 'src/app/services/ZonaUbicacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-organizacion-soli',
  templateUrl: './actualizar-organizacion-soli.component.html',
  styleUrls: ['./actualizar-organizacion-soli.component.css']
})
export class ActualizarOrganizacionSoliComponent implements OnInit {

  value = 'Clear me';

  nivelOrganizacionSocial: INivelOrganizacion[] = [];
  tipoOrganizacionSocial: ITipoOrganizacion[] = [];
  zonaUbicacion: IZonaUbicacion[] = [];

  idNivelOrg: string;
  idTipoOrg: string;
  idZona: string;

  registrada: number;

  verificar: Solicitud;

  registrarSolcitud: solicitudDto = new solicitudDto();

  constructor(private router: Router, private solicitudService: solicitudService,
    private nivelOrganizacionSocialService: NivelOrganizacionService,
    private tipoOrganizacionSocialService: TipoOrganizacionService,
    private ZonaUbicacionService: ZonaUbicacionService,) { }

  ngOnInit(): void {
    this.getNivelOrganizacion(),
      this.getTipoOrganizacion(),
      this.getZonaUbicacion(),
      this.listarSoliRegistradaParaActualizar();
  }

  listarSoliRegistradaParaActualizar() {

    const usuario_session: any = JSON.parse(sessionStorage.getItem('usuarioLogged'));
    let idUsuario: number = usuario_session.idUsuario;

    this.solicitudService.verificarRegistradoSolicitud(idUsuario).subscribe({
      next: (solicitud: Solicitud) => {
        this.verificar = solicitud;
        this.registrada = this.verificar.estadoSolicitd;
        console.log(this.verificar);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getNivelOrganizacion() {
    this.nivelOrganizacionSocialService.getNivelOrganizacionSocial().subscribe({
      next: (resp: INivelOrganizacion[]) => {
        console.log(resp);
        this.nivelOrganizacionSocial = resp;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getTipoOrganizacion() {
    this.tipoOrganizacionSocialService.getTipoOrganziacionSocial().subscribe({
      next: (resp: ITipoOrganizacion[]) => {
        console.log(resp);
        this.tipoOrganizacionSocial = resp;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getZonaUbicacion() {
    this.ZonaUbicacionService.getZonaUbicacion().subscribe({
      next: (resp: IZonaUbicacion[]) => {
        console.log(resp);
        this.zonaUbicacion = resp;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  handleNivelOrganizacion(event: Event) {
    console.log(event);
    const element = event.target as HTMLSelectElement;
    console.log(element.value);
    this.registrarSolcitud.nivelOrganizacionSocial = parseInt(element.value);
  }

  handleTipoOrganizacion(event: Event) {
    console.log(event);
    const element = event.target as HTMLSelectElement;
    console.log(element.value);
    this.registrarSolcitud.tipoOrganizacionSocial = parseInt(element.value);
  }

  handleZonaUbicacion(event: Event) {
    console.log(event);
    const element = event.target as HTMLSelectElement;
    console.log(element.value);
    this.registrarSolcitud.zonaOrganizacionSocial = parseInt(element.value);
  }



  registrarSolicitudActualizar() {
    const usuario_session = sessionStorage.getItem('usuarioLogged');
    let usuario: any = JSON.parse(usuario_session!)
    this.registrarSolcitud.usuario = usuario.idUsuario;
    this.registrarSolcitud.correoSolicitante = usuario.correo;
    this.solicitudService.crearSolcitudActualizarOrganizacion(this.registrarSolcitud).subscribe({
      next: (resp: any) => {
        localStorage.setItem("idSolicitudActualizacionCreada", resp.data.idSolicitud);
        console.log(resp);
        Swal.fire({
          icon: 'success',
          title: 'Datos guardados Correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('admin-panel/solictud-actualizar-junta-directiva-soli');
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

}
