import { RoundbtnComponent } from './Buttons/roundbtn/roundbtn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from '../button/button.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { OutlinedInputComponent } from './outlined-input/outlined-input.component';
import { UserDetailsComponent } from './Cards/user-details/user-details.component';
import { OutlineBtnComponent } from './Buttons/outline-btn/outline-btn.component';
import { TextButtonComponent } from './Buttons/text-button/text-button.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    IconButtonComponent,
    ToolbarComponent,
    OutlinedInputComponent,
    UserDetailsComponent,
    OutlineBtnComponent,
    RoundbtnComponent,
    TextButtonComponent
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    InputComponent,
    ButtonComponent,
    IconButtonComponent,
    OutlinedInputComponent,
    UserDetailsComponent,
    OutlineBtnComponent,
    RoundbtnComponent,
    TextButtonComponent
  ],
})
export class SharedModule {}
