import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcommingPageRoutingModule } from './upcomming-routing.module';

import { UpcommingPage } from './upcomming.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcommingPageRoutingModule,
    SharedModule
  ],
  declarations: [UpcommingPage]
})
export class UpcommingPageModule {}
