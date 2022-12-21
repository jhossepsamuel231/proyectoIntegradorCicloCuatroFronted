import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualizarOrganizacionRoutingModule } from './actualizar-organizacion-routing.module';
import { ActualizarOrganizacionSoliComponent } from './actualizar-organizacion-soli/actualizar-organizacion-soli.component';
import { DocumentosActualizarOrganizacionComponent } from './documentos-actualizar-organizacion/documentos-actualizar-organizacion.component';
import { AgregarJuntaDirectivaSoliActualizarComponent } from './agregar-junta-directiva-soli-actualizar/agregar-junta-directiva-soli-actualizar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActualizarOrganizacionSoliComponent,
    DocumentosActualizarOrganizacionComponent,
    AgregarJuntaDirectivaSoliActualizarComponent
  ],
  imports: [
    CommonModule,
    ActualizarOrganizacionRoutingModule,
    FormsModule
  ]
})
export class ActualizarOrganizacionModule { }
