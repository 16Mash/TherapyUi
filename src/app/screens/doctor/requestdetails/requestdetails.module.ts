import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestdetailsPageRoutingModule } from './requestdetails-routing.module';

import { RequestdetailsPage } from './requestdetails.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestdetailsPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [RequestdetailsPage]
})
export class RequestdetailsPageModule {}
