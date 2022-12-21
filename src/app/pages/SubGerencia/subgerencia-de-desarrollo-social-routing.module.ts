import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { InformesTecnicoComponent } from './informes-tecnico/informes-tecnico.component';
import { RegistrarInformeTecnicoComponent } from './registrar-informe-tecnico/registrar-informe-tecnico.component';

const routes: Routes = [

  { path: 'lista-expedientes', component:ExpedientesComponent, title: 'Lista de Expedientes' },
  { path: 'informe-tecnico', component: InformesTecnicoComponent, title: 'Subiendo Informe Tecnico' },
  { path: 'registrar-informe-tecnico', component:RegistrarInformeTecnicoComponent, title: 'Registar Informes Tecnicos'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubgerenciaDeDesarrolloSocialRoutingModule { }
