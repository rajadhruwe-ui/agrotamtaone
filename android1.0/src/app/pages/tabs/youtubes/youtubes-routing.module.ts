import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoutubesPage } from './youtubes.page';

const routes: Routes = [
  {
    path: '',
    component: YoutubesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubesPageRoutingModule {}
