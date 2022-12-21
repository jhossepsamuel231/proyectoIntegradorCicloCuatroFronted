import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubgerenciaDeDesarrolloSocialRoutingModule } from './subgerencia-de-desarrollo-social-routing.module';
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { RegistrarInformeTecnicoComponent } from './registrar-informe-tecnico/registrar-informe-tecnico.component';
import { FormsModule } from '@angular/forms';
import { InformesTecnicoComponent } from './informes-tecnico/informes-tecnico.component';


@NgModule({
  declarations: [
    ExpedientesComponent,
    RegistrarInformeTecnicoComponent,
    InformesTecnicoComponent
  ],
  imports: [
    CommonModule,
    SubgerenciaDeDesarrolloSocialRoutingModule,
    FormsModule
  ]
})
export class SubgerenciaDeDesarrolloSocialModule { }
