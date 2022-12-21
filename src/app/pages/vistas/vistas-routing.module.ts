import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaUsuariosComponent } from './crear-cuenta-usuarios/crear-cuenta-usuarios.component';
import { VistaPublicaComponent } from './vista-publica/vista-publica.component';
import { VistaUsuariosLogeadosComponent } from './vista-usuarios-logeados/vista-usuarios-logeados.component';

const routes: Routes = [
  { path: 'vista-publica', component: VistaPublicaComponent, title: 'Vista Publica'},
  { path: 'crear-cuenta', component: CrearCuentaUsuariosComponent, title: 'Crear Cuenta'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistasRoutingModule { }
