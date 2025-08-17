import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmRegistrationPage } from './farm-registration.page';

const routes: Routes = [
  {
    path: '',
    component: FarmRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmRegistrationPageRoutingModule {}
