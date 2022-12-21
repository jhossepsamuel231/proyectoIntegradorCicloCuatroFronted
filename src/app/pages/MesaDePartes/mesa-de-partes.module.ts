import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesaDePartesRoutingModule } from './mesa-de-partes-routing.module';
import { GenerarExpedienteComponent } from './generar-expediente/generar-expediente.component';
import { ListaDeExpedientesComponent } from './lista-de-expedientes/lista-de-expedientes.component';


@NgModule({
  declarations: [
    GenerarExpedienteComponent,
    ListaDeExpedientesComponent
  ],
  imports: [
    CommonModule,
    MesaDePartesRoutingModule
  ]
})
export class MesaDePartesModule { }
