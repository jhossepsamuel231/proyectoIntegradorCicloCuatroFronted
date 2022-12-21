import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderPrincipalComponent } from './header-principal/header-principal.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelAdministradorComponent } from './panel-administrador/panel-administrador.component';
import { RouterModule } from '@angular/router';
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';



@NgModule({
  declarations: [
    HeaderPrincipalComponent,
    HeaderComponent,
    SidebarComponent,
    PanelAdministradorComponent,
    PanelPrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PanelAdministradorComponent,
    PanelPrincipalComponent
  ]
})
export class SharedModule { }
