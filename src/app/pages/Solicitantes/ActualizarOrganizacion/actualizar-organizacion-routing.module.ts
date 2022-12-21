import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarOrganizacionSoliComponent } from './actualizar-organizacion-soli/actualizar-organizacion-soli.component';
import { AgregarJuntaDirectivaSoliActualizarComponent } from './agregar-junta-directiva-soli-actualizar/agregar-junta-directiva-soli-actualizar.component';
import { DocumentosActualizarOrganizacionComponent } from './documentos-actualizar-organizacion/documentos-actualizar-organizacion.component';

const routes: Routes = [

  { path: 'solictud-actualizar-organizacion', component: ActualizarOrganizacionSoliComponent, title: 'Solicitud Para Actualizar Organizacion' },
  { path: 'solictud-actualizar-junta-directiva-soli', component: AgregarJuntaDirectivaSoliActualizarComponent, title: 'Agregando Una Nueva Junta Directiva' },
  { path: 'documentos-actualizar-organizacion', component: DocumentosActualizarOrganizacionComponent, title: 'Documentos Actualizar Organziacion' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActualizarOrganizacionRoutingModule { }
