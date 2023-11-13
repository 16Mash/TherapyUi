import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {
  selectedSession: string = 'all';
  user: any;
  comm:any;
  comming:any;
  request:any;
  uid:any;
  constructor(    private _utils: UtilsService,
    private database: FirestoreService,
    private _auth: AuthService,
    private _route:Router) { }

  ngOnInit() {
    this.user = this._utils.getArray('thiduser');
    console.log(this.user);
    this.uid= localStorage.getItem('thid');
    this.database.UserSessions("Sessions",this.uid,"Accepted").snapshotChanges().subscribe(res=>{
      this.request = res
      console.log(res)
    })
  }

  change(){
    
  }

}
