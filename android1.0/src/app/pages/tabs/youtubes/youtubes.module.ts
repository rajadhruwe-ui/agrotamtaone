import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoutubesPageRoutingModule } from './youtubes-routing.module';


import { YoutubesPage } from './youtubes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoutubesPageRoutingModule
  ],
  declarations: [YoutubesPage]
})
export class YoutubesPageModule {}
