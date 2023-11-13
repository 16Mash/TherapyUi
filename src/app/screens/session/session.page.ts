import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {

  chat:boolean=false;
  video:boolean=false;
  open:boolean=false;
  user: any;
  comm:any;
  comming:any;
  request:any;
  uid:any;
  ref:any;

  contactName = ''; 
  newMessage = '';
  messages:any;

 
  constructor(    private _utils: UtilsService,
    private Database: FirestoreService,
    private _auth: AuthService,
    private _rout: ActivatedRoute,
    private _route:Router) { }

  ngOnInit() {
    this.ref = this._rout.snapshot.paramMap.get('id');
    this.uid= localStorage.getItem('thid');
    console.log(this.ref);
    this.user = this._utils.getArray('thiduser');
    this.Database.readDataById('Sessions', this.ref).subscribe((res) => {
      console.log(res);
      this.request = res;
      if(this.request.status=="Started")
      {
        this.open=true
      }
      this._utils.dismiss();
    });
    this.user = this._utils.getArray('thiduser');
    console.log(this.user);
    this.uid= localStorage.getItem('thid');
    this.Database.chatService(this.ref).subscribe((res)=>{
      this.messages=res
    })
  }
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const message = {
        text: this.newMessage,
        sender: this.uid,
        timestamp: new Date(),
      };
      this.Database.SentChat(this.ref,this._utils.gerateUid(),message).then(()=>{
        this.newMessage = '';
      })
     
    }
  }

}
