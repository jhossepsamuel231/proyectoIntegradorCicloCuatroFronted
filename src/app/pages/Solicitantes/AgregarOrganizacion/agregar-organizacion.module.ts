import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarOrganizacionRoutingModule } from './agregar-organizacion-routing.module';
import { AgregarOrganizacionSoliComponent } from './agregar-organizacion-soli/agregar-organizacion-soli.component';
import { DocumentosAgregarOrganizacionComponent } from './documentos-agregar-organizacion/documentos-agregar-organizacion.component';
import { AgregarJuntaDirectivaSoliComponent } from './agregar-junta-directiva-soli/agregar-junta-directiva-soli.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarOrganizacionSoliComponent,
    DocumentosAgregarOrganizacionComponent,
    AgregarJuntaDirectivaSoliComponent
  ],
  imports: [
    CommonModule,
    AgregarOrganizacionRoutingModule,
    FormsModule
  ]
})
export class AgregarOrganizacionModule { }
