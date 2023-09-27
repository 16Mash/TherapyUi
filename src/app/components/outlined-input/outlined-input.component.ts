import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-outlined-input',
  templateUrl: './outlined-input.component.html',
  styleUrls: ['./outlined-input.component.scss'],
})
export class OutlinedInputComponent  implements OnInit {

  @Input() label :string | undefined;
  @Input() placeholder:String |undefined;
  @Input() keyboardOnption:string|undefined;
  constructor() { }

  ngOnInit() {}

}
