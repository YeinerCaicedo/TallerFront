import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniarSesionPage } from './iniar-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: IniarSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniarSesionPageRoutingModule {}
