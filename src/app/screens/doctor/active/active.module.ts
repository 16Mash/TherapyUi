import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivePageRoutingModule } from './active-routing.module';

import { ActivePage } from './active.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivePageRoutingModule,
    SharedModule
  ],
  declarations: [ActivePage]
})
export class ActivePageModule {}
