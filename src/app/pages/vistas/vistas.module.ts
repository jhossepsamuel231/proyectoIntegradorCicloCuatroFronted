import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistasRoutingModule } from './vistas-routing.module';
import { CrearCuentaUsuariosComponent } from './crear-cuenta-usuarios/crear-cuenta-usuarios.component';
import { VistaPublicaComponent } from './vista-publica/vista-publica.component';
import { VistaUsuariosLogeadosComponent } from './vista-usuarios-logeados/vista-usuarios-logeados.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AdminModule } from '../Admin/admin.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearCuentaUsuariosComponent,
    VistaPublicaComponent,
    VistaUsuariosLogeadosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    VistasRoutingModule,
    RouterModule,
    AdminModule,
  ]
})
export class VistasModule { }
