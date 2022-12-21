import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciaDeDesarrolloSocialRoutingModule } from './gerencia-de-desarrollo-social-routing.module';
import { InformesTecnicosComponent } from './informes-tecnicos/informes-tecnicos.component';
import { RegistrarResolucionComponent } from './registrar-resolucion/registrar-resolucion.component';
import { EnviarNotificacionComponent } from './enviar-notificacion/enviar-notificacion.component';
import { VerDocumentoExpedienteComponent } from './ver-documento-expediente/ver-documento-expediente.component';
import { VerExpedienteComponent } from './ver-expediente/ver-expediente.component';
import { FormsModule } from '@angular/forms';
import { EnvioDeNotificacionComponent } from './envio-de-notificacion/envio-de-notificacion.component';
import { EmpezarRegistroResolucionComponent } from './empezar-registro-resolucion/empezar-registro-resolucion.component';


@NgModule({
  declarations: [
    InformesTecnicosComponent,
    RegistrarResolucionComponent,
    EnviarNotificacionComponent,
    VerDocumentoExpedienteComponent,
    VerExpedienteComponent,
    EnvioDeNotificacionComponent,
    EmpezarRegistroResolucionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GerenciaDeDesarrolloSocialRoutingModule
  ]
})
export class GerenciaDeDesarrolloSocialModule { }
