import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.page.html',
  styleUrls: ['./upcomming.page.scss'],
})
export class UpcommingPage implements OnInit {
  user: any;
  comm:any;
  comming:any;
  request:any;
  uid:any;
  constructor(
    private _utils: UtilsService,
    private database: FirestoreService,
    private _auth: AuthService,
    private _route:Router
  ) { }

  ngOnInit() {

    this.user = this._utils.getArray('thiduser');
    console.log(this.user);
    this.uid= localStorage.getItem('thid');
    if (this.user.type != 'doctor') {
      this._auth.logout();
    }
    this.database.countRequest("Sessions",this.uid,"Accepted").snapshotChanges().subscribe(res=>{
      this.request = res
      console.log(res)
    })
  }

  openSession(dota:any,doc:any)
  {
    console.log(dota)
    this.database.setDataUpdateNotification("Sessions",{'status':'Started'},doc,dota.user,"Session Started").then(()=>{
     this._route.navigateByUrl('/session/'+doc) 
    })
  }
  

}
