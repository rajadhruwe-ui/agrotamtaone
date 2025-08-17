import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmRegistrationPageRoutingModule } from './farm-registration-routing.module';

import { FarmRegistrationPage } from './farm-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmRegistrationPageRoutingModule
  ],
  declarations: [FarmRegistrationPage]
})
export class FarmRegistrationPageModule {}
