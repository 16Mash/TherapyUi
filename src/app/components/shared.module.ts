import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from '../button/button.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { OutlinedInputComponent } from './outlined-input/outlined-input.component';


@NgModule({
    declarations: [InputComponent ,ButtonComponent, IconButtonComponent,ToolbarComponent,OutlinedInputComponent],
    imports: [CommonModule, IonicModule],
    exports: [InputComponent,ButtonComponent, IconButtonComponent,OutlinedInputComponent],
  })
  export class SharedModule {}