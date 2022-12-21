import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';import { RegistrarPrivilegiosComponent } from './registrar-privilegios/registrar-privilegios.component';
import { AsignarNuevoRequisitoComponent } from './asignar-nuevo-requisito/asignar-nuevo-requisito.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioEmpleadoComponent } from './RegistrarEmpleado/registrar-usuario-empleado/registrar-usuario-empleado.component';
import { RegistrarEmpleadoModule } from './RegistrarEmpleado/registrar-empleado.module';


@NgModule({
  declarations: [
    RegistrarPrivilegiosComponent,
    AsignarNuevoRequisitoComponent,
    ListaUsuariosComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RegistrarEmpleadoModule
  ]
})
export class AdminModule { }
