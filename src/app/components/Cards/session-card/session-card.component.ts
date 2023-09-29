import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss'],
})
export class SessionCardComponent  implements OnInit {

  @Input() names:string|undefined;
  @Input() session:string|undefined;
  @Input() date:string|undefined;
  @Input() time:string|undefined;
  @Input() image:string|undefined;
  @Input() isComing:Boolean=true;
  constructor() { }
  bgComing:string="#c6c4f5"
  bg:string|undefined;
  ngOnInit() {
    if(this.isComing)
    {
      this.bg=this.bgComing
    }
    else
    {
      this.bg="#ededf0"
    }
  }

}