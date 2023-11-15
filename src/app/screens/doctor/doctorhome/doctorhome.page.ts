import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.page.html',
  styleUrls: ['./doctorhome.page.scss'],
})
export class DoctorhomePage implements OnInit {
  user: any;
  comm:any;
  comming:any;
  request:any;
  uid:any;
  newRequests:any;
  activeRequests:any;
  active:any;
  new:any
  coming:any
  upcomingRequests:any;
  countRequest:any;
  constructor(
    private _utils: UtilsService,
    private database: FirestoreService,
    private _auth: AuthService
  ) {}

  ngOnInit() {
    this.user = this._utils.getArray('thiduser');
    console.log(this.user);
    this.uid= localStorage.getItem('thid');
    if (this.user.type != 'doctor') {
      this._auth.logout();
    }
    this.database.readAllWithID("Community").subscribe(res=>{
      console.log("this",res)
      this.comm =res;
    })

    //this.database.countRequest("Sessions",this.uid,"new").pipe(map((document)=>(doocuments ? document.len) ))
  
    this.database.countRequest("Sessions",this.uid,"new").snapshotChanges().subscribe(res=>{
      this.newRequests = res;
      console.log("New Requests: ", this.newRequests.length);
      this.new = this.newRequests.length
    })
    this.database.countRequest("Sessions",this.uid,"Started").snapshotChanges().subscribe(res=>{
      this.activeRequests = res;
      console.log("Active Requests: ", this.activeRequests.length);
      this.active=this.activeRequests.length
    })
    this.database.countRequest("Sessions",this.uid,"Accepted").snapshotChanges().subscribe(res=>{
      this.upcomingRequests = res;
      console.log("Upcoming Requests: ", this.upcomingRequests.length);
      this.coming = this.upcomingRequests.length
    })
  }
}
