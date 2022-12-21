import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistasModule } from './vistas/vistas.module';
import { AdminModule } from './Admin/admin.module';
import { GerenciaDeDesarrolloSocialModule } from './GerenciaDeDesarrolloSocial/gerencia-de-desarrollo-social.module';
import { MesaDePartesModule } from './MesaDePartes/mesa-de-partes.module';
import { SolicitanteModule } from './Solicitantes/solicitante.module';
import { SubgerenciaDeDesarrolloSocialModule } from './SubGerencia/subgerencia-de-desarrollo-social.module';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    VistasModule,
    AdminModule,
    GerenciaDeDesarrolloSocialModule,
    MesaDePartesModule,
    SolicitanteModule,
    SubgerenciaDeDesarrolloSocialModule
  ],
  exports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }
