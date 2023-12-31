import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  
  @Input() label : string ="";
  @Input() type = 'text'; //set default type be text

  @Input() parentForm!: FormGroup;
  @Input()controlName!: string;

  focused: boolean =false;
  onBlur(event:any){
    const value = event.target.value;
    if(!value){
      this.focused = false;
      
    }

  }

}
