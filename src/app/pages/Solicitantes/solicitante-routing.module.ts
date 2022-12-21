import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarOrganizacionRoutingModule } from './ActualizarOrganizacion/actualizar-organizacion-routing.module';
import { AgregarOrganizacionRoutingModule } from './AgregarOrganizacion/agregar-organizacion-routing.module';
import { InfoOrganizacionComponent } from './info-organizacion/info-organizacion.component';
import { ListaNotificacionesComponent } from './lista-notificaciones/lista-notificaciones.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { VerEstadoSolicitudComponent } from './ver-estado-solicitud/ver-estado-solicitud.component';

const routes: Routes = [

  { path: 'informacion-organizacion', component: InfoOrganizacionComponent, title: 'Informacion De Mi Organizacion' },
  { path: 'lista-notificaciones', component: ListaNotificacionesComponent, title: 'Lista De Mis Notificaciones' },
  { path: 'lista-solicitudes', component: ListaSolicitudesComponent, title: 'Lista De Mis Solicitudes' },
  { path: 'ver-estado-solicitud', component: VerEstadoSolicitudComponent, title: 'Ver El Estado De Mi Solicitud' }

];

@NgModule({
  imports: [RouterModule.forChild(routes), ActualizarOrganizacionRoutingModule, AgregarOrganizacionRoutingModule],
  exports: [RouterModule]
})
export class SolicitanteRoutingModule { }
