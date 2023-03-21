import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniarSesionPageRoutingModule } from './iniar-sesion-routing.module';

import { IniarSesionPage } from './iniar-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniarSesionPageRoutingModule
  ],
  declarations: [IniarSesionPage]
})
export class IniarSesionPageModule {}
