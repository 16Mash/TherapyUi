import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorcard',
  templateUrl: './doctorcard.component.html',
  styleUrls: ['./doctorcard.component.scss'],
})
export class DoctorcardComponent  implements OnInit {
@Input() doc:any;
star=5;
  constructor() { }

  ngOnInit() {}

}
