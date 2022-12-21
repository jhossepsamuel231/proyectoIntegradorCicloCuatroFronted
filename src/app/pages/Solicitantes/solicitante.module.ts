import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitanteRoutingModule } from './solicitante-routing.module';
import { AgregarOrganizacionModule } from './AgregarOrganizacion/agregar-organizacion.module';
import { ActualizarOrganizacionModule } from './ActualizarOrganizacion/actualizar-organizacion.module';
import { VerEstadoSolicitudComponent } from './ver-estado-solicitud/ver-estado-solicitud.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { ListaNotificacionesComponent } from './lista-notificaciones/lista-notificaciones.component';
import { InfoOrganizacionComponent } from './info-organizacion/info-organizacion.component';

@NgModule({
  declarations: [
    VerEstadoSolicitudComponent,
    ListaSolicitudesComponent,
    ListaNotificacionesComponent,
    InfoOrganizacionComponent
  ],
  imports: [
    CommonModule,
    SolicitanteRoutingModule,
    AgregarOrganizacionModule,
    ActualizarOrganizacionModule
  ]
})
export class SolicitanteModule { }
