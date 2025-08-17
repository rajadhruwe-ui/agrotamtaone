import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogfirePageRoutingModule } from './logfire-routing.module';

import { LogfirePage } from './logfire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogfirePageRoutingModule
  ],
  declarations: [LogfirePage]
})
export class LogfirePageModule {}
