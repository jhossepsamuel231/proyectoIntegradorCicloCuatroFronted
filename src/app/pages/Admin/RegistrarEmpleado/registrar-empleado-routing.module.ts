import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarTipoEmpleadoComponent } from './registrar-tipo-empleado/registrar-tipo-empleado.component';
import { RegistrarUsuarioEmpleadoComponent } from './registrar-usuario-empleado/registrar-usuario-empleado.component';

const routes: Routes = [
  { path: 'registrar-tipo-empleado', component: RegistrarTipoEmpleadoComponent, title: 'Registrar Tipo Empleado' },
  { path: 'registrar-usuarios-empleado', component: RegistrarUsuarioEmpleadoComponent, title: 'Registrar Usuarios Empleado' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarEmpleadoRoutingModule { }
