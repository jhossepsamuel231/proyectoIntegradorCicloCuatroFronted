import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosDeSolicitudComponent } from './documentos-de-solicitud/documentos-de-solicitud.component';
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { InformesTecnicoComponent } from './informes-tecnico/informes-tecnico.component';
import { RegistrarInformeTecnicoComponent } from './registrar-informe-tecnico/registrar-informe-tecnico.component';
import { VerDocumentosSolicitudComponent } from './ver-documentos-solicitud/ver-documentos-solicitud.component';

const routes: Routes = [

  { path: 'lista-expedientes', component: ExpedientesComponent, title: 'Lista de Expedientes' },
  { path: 'documentos-solicitud', component: VerDocumentosSolicitudComponent, title: 'Documentos de La Solicitud' },
  { path: 'informe-tecnico', component: InformesTecnicoComponent, title: 'Subiendo Informe Tecnico' },
  { path: 'registrar-informe-tecnico', component: RegistrarInformeTecnicoComponent, title: 'Registar Informes Tecnicos' },
  { path: 'ver-documentos-solicitud', component: DocumentosDeSolicitudComponent, title: 'viendo Documentos de la Solicitud' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubgerenciaDeDesarrolloSocialRoutingModule { }
