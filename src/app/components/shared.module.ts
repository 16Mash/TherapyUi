import { CommunityCardComponent } from './Cards/community-card/community-card.component';
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
import { DayitemComponent } from './dayitem/dayitem.component';
import { SessionCardComponent } from './Cards/session-card/session-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    TextButtonComponent,
    DayitemComponent,
    SessionCardComponent,
    CommunityCardComponent,
  ],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    ButtonComponent,
    IconButtonComponent,
    OutlinedInputComponent,
    UserDetailsComponent,
    OutlineBtnComponent,
    RoundbtnComponent,
    TextButtonComponent,
    ToolbarComponent,
    DayitemComponent,
    SessionCardComponent,
    CommunityCardComponent,
  ],
})
export class SharedModule {}
