import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctordetailsPageRoutingModule } from './doctordetails-routing.module';

import { DoctordetailsPage } from './doctordetails.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctordetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [DoctordetailsPage]
})
export class DoctordetailsPageModule {}
