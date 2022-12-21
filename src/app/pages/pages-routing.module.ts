import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RecuperarContraseniaComponent } from '../auth/recuperar-contrasenia/recuperar-contrasenia.component';
import { AdminPanelGuard } from '../guards/admin-panel.guard';
import { LoginGuard } from '../guards/login.guard';
import { PanelAdministradorComponent } from '../shared/panel-administrador/panel-administrador.component';
import { PanelPrincipalComponent } from '../shared/panel-principal/panel-principal.component';
import { AdminRoutingModule } from './Admin/admin-routing.module';
import { GerenciaDeDesarrolloSocialRoutingModule } from './GerenciaDeDesarrolloSocial/gerencia-de-desarrollo-social-routing.module';
import { MesaDePartesRoutingModule } from './MesaDePartes/mesa-de-partes-routing.module';
import { SolicitanteRoutingModule } from './Solicitantes/solicitante-routing.module';
import { SubgerenciaDeDesarrolloSocialRoutingModule } from './SubGerencia/subgerencia-de-desarrollo-social-routing.module';
import { VistaUsuariosLogeadosComponent } from './vistas/vista-usuarios-logeados/vista-usuarios-logeados.component';

const routes: Routes = [
  {
    path: 'principal-panel',
    component: PanelPrincipalComponent,
    title: 'principal Panel | Chaclacayo',
    children: [
      { path: 'login', canActivate: [LoginGuard], component: LoginComponent, title: 'Login' },
      { path: 'recuperar-contrasenia', component: RecuperarContraseniaComponent, title: 'Recuperando Contraseña' },
      { path: '', loadChildren: () => import('./vistas/vistas.module').then(m => m.VistasModule) },
    ]
  },
  /*
  
  */
  /*{
    path: 'admin-panel',
        canActivate: [AdminPanelGuard],
        component: PanelAdministradorComponent,
        title: 'Admin Panel | Chaclacayo',
        children: [
            { path: 'administrar-categorias', component: ListarCategoriasComponent, title: 'Administrar categorías' },
            { path: 'administrar-productos', component: ListarProductosComponent, title: 'Administrar productos'},            
         ],
  }*/
  {
    path: 'admin-panel',
    canActivate: [AdminPanelGuard],
    component: PanelAdministradorComponent,
    title: 'Admin Panel | Chaclacayo',
    children: [
      { path: 'dashboard', component: VistaUsuariosLogeadosComponent, title: 'Dashboard' },
      { path: '', loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule) },
      { path: '', loadChildren: () => import('./GerenciaDeDesarrolloSocial/gerencia-de-desarrollo-social.module').then(m => m.GerenciaDeDesarrolloSocialModule) },
      { path: '', loadChildren: () => import('./MesaDePartes/mesa-de-partes.module').then(m => m.MesaDePartesModule) },
      { path: '', loadChildren: () => import('./Solicitantes/solicitante.module').then(m => m.SolicitanteModule) },
      { path: '', loadChildren: () => import('./SubGerencia/subgerencia-de-desarrollo-social.module').then(m => m.SubgerenciaDeDesarrolloSocialModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AdminRoutingModule, GerenciaDeDesarrolloSocialRoutingModule, MesaDePartesRoutingModule, SolicitanteRoutingModule, SubgerenciaDeDesarrolloSocialRoutingModule],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
