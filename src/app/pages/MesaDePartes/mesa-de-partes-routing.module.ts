import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarExpedienteComponent } from './generar-expediente/generar-expediente.component';
import { ListaDeExpedientesComponent } from './lista-de-expedientes/lista-de-expedientes.component';

const routes: Routes = [
  { path: 'generar-expediente', component: GenerarExpedienteComponent, title: 'Generar Expediente' },
  { path: 'lista-expediente', component: ListaDeExpedientesComponent, title: 'Lista de Expedientes' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesaDePartesRoutingModule { }
