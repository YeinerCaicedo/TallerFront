import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarFacturasPage } from './mostrar-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarFacturasPageRoutingModule {}
