import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationpagePage } from './registrationpage.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationpagePageRoutingModule {}
