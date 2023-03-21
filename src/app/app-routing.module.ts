import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Sesion',
    loadChildren: () => import('./iniar-sesion/iniar-sesion.module').then( m => m.IniarSesionPageModule)
  },
  {
    path: 'show',
    loadChildren: () => import('./mostrar-facturas/mostrar-facturas.module').then( m => m.MostrarFacturasPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./crear-factura/crear-factura.module').then( m => m.CrearFacturaPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./elegir/elegir.module').then( m => m.ElegirPageModule)
  },
  {
    path: '',
    redirectTo: 'Sesion',
    pathMatch: 'full'
  },
  {
    path: 'elegir',
    loadChildren: () => import('./elegir/elegir.module').then( m => m.ElegirPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
