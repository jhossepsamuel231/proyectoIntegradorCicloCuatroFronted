import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarEmpleadoRoutingModule } from './registrar-empleado-routing.module';
import { RegistrarTipoEmpleadoComponent } from './registrar-tipo-empleado/registrar-tipo-empleado.component';
import { RegistrarUsuarioEmpleadoComponent } from './registrar-usuario-empleado/registrar-usuario-empleado.component';


@NgModule({
  declarations: [
    RegistrarTipoEmpleadoComponent,
    RegistrarUsuarioEmpleadoComponent
  ],
  imports: [
    CommonModule,
    RegistrarEmpleadoRoutingModule
  ]
})
export class RegistrarEmpleadoModule { }
