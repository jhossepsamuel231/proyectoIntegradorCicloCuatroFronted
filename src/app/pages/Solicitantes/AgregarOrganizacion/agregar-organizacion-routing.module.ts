import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarJuntaDirectivaSoliComponent } from './agregar-junta-directiva-soli/agregar-junta-directiva-soli.component';
import { AgregarOrganizacionSoliComponent } from './agregar-organizacion-soli/agregar-organizacion-soli.component';
import { DocumentosAgregarOrganizacionComponent } from './documentos-agregar-organizacion/documentos-agregar-organizacion.component';

const routes: Routes = [

  { path: 'solictud-agregar-organizacion', component: AgregarOrganizacionSoliComponent, title: 'Solicitud Para Agregar Organizacion' },
  { path: 'solictud-agregar-junta-directiva-soli', component: AgregarJuntaDirectivaSoliComponent, title: 'Agregando Junta Directiva' },
  { path: 'documentos-agregar-organizacion', component: DocumentosAgregarOrganizacionComponent, title: 'Documentos Agregar Organziacion' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarOrganizacionRoutingModule { }
