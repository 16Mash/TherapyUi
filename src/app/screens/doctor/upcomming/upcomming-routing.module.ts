import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcommingPage } from './upcomming.page';

const routes: Routes = [
  {
    path: '',
    component: UpcommingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcommingPageRoutingModule {}
