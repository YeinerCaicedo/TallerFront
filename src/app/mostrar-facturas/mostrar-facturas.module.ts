import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarFacturasPageRoutingModule } from './mostrar-facturas-routing.module';

import { MostrarFacturasPage } from './mostrar-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarFacturasPageRoutingModule
  ],
  declarations: [MostrarFacturasPage]
})
export class MostrarFacturasPageModule {}
