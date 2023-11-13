import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss'],
})
export class SessionCardComponent  implements OnInit {

  @Input() names:string|undefined;
  @Input() session:any;
  @Input() id:string|undefined;
  @Input() time:string|undefined;
  @Input() image:string|undefined;
  @Input() isComing:Boolean=true;
  constructor(private _riuter :Router) { }
  bgComing:string="#c6c4f5"
  bg:string|undefined;
  ngOnInit() {
    if(this.session.status=='Accepted'|| this.session.status=='Started')
    {
      this.bg=this.bgComing
    }
    else
    {
      this.bg="#ededf0"
    }
  }

  navigate(link :any){
    this._riuter.navigate([link])
  }
book(doc:any){
  this._riuter.navigateByUrl('/booking')
}
}
