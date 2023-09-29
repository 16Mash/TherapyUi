import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorhomePage } from './doctorhome.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorhomePageRoutingModule {}
