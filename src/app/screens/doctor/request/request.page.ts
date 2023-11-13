import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  user: any;
  comm:any;
  comming:any;
  request:any;
  uid:any;
  constructor(
    private _utils: UtilsService,
    private database: FirestoreService,
    private _auth: AuthService
  ) { }

  ngOnInit() {

    this.user = this._utils.getArray('thiduser');
    console.log(this.user);
    this.uid= localStorage.getItem('thid');
    if (this.user.type != 'doctor') {
      this._auth.logout();
    }
    // this.database.readAllWithID("Community").subscribe(res=>{
    //   console.log("this",res)
    //   this.comm =res;
    // })
    this.database.countRequest("Sessions",this.uid,"new").snapshotChanges().subscribe(res=>{
      this.request = res
      console.log(res)
    })
  }

}
