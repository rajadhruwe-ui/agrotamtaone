import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationpagePageRoutingModule } from './registrationpage-routing.module';

import { RegistrationpagePage } from './registrationpage.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationpagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrationpagePage]
})
export class RegistrationpagePageModule {}
