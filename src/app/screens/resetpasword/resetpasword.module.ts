import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetpaswordPageRoutingModule } from './resetpasword-routing.module';

import { ResetpaswordPage } from './resetpasword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetpaswordPageRoutingModule
  ],
  declarations: [ResetpaswordPage]
})
export class ResetpaswordPageModule {}
