import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpezarRegistroResolucionComponent } from './empezar-registro-resolucion/empezar-registro-resolucion.component';
import { EnviarNotificacionComponent } from './enviar-notificacion/enviar-notificacion.component';
import { EnvioDeNotificacionComponent } from './envio-de-notificacion/envio-de-notificacion.component';
import { InformesTecnicosComponent } from './informes-tecnicos/informes-tecnicos.component';
import { RegistrarResolucionComponent } from './registrar-resolucion/registrar-resolucion.component';
import { VerDocumentoExpedienteComponent } from './ver-documento-expediente/ver-documento-expediente.component';
import { VerExpedienteComponent } from './ver-expediente/ver-expediente.component';

const routes: Routes = [
  { path: 'informes-tecnicos', component: InformesTecnicosComponent, title: 'Informes Tecnicos' },
  { path: 'registrando-resolucion', component: EmpezarRegistroResolucionComponent, title: 'Registrando Resolucion' },
  { path: 'enviando-notificacion', component: EnvioDeNotificacionComponent, title: 'Enviando Notificacion' },
  { path: 'enviar-notificacion', component: EnviarNotificacionComponent, title: 'Enviar Notificacion' },
  { path: 'registrar-resolucion', component: RegistrarResolucionComponent, title: 'Registrar Resolucion' },
  { path: 'ver-expedientes', component: VerExpedienteComponent, title: 'Ver Expedientes' },
  { path: 'ver-documento-expedientes', component: VerDocumentoExpedienteComponent, title: 'Ver Documento Expedientes' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciaDeDesarrolloSocialRoutingModule { }
