import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogfirePage } from './logfire.page';

const routes: Routes = [
  {
    path: '',
    component: LogfirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogfirePageRoutingModule {}
