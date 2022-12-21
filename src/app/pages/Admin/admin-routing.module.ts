import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarNuevoRequisitoComponent } from './asignar-nuevo-requisito/asignar-nuevo-requisito.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RegistrarPrivilegiosComponent } from './registrar-privilegios/registrar-privilegios.component';
import { RegistrarEmpleadoRoutingModule } from './RegistrarEmpleado/registrar-empleado-routing.module';
/* import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
 */
const routes: Routes = [
 /*  { path: 'registrar-empleado', component:RegistrarEmpleadoComponent, title: 'Registrar Empleado'} */
 { path: 'asignar-nuevo-requisito', component: AsignarNuevoRequisitoComponent, title: 'Asignar Nuevo Requisito' },
 { path: 'lista-usuarios', component: ListaUsuariosComponent, title: 'Lista Usuarios' },
 { path: 'registrar-privilegios', component: RegistrarPrivilegiosComponent, title: 'Registrar Privilegios'}
];

@NgModule({
  imports: [RouterModule.forChild(routes), RegistrarEmpleadoRoutingModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
