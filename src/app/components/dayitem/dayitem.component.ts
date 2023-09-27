import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dayitem',
  templateUrl: './dayitem.component.html',
  styleUrls: ['./dayitem.component.scss'],
})
export class DayitemComponent  implements OnInit {

  @Input() day:string|undefined;
  @Input() time:string|undefined;
  constructor() { }

  ngOnInit() {}

}
