import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notification: any;
  uid: any;
  constructor(
    private _utils: UtilsService,
    private database: FirestoreService,
    private _auth: AuthService
  ) {}

  ngOnInit() {
    this.uid = localStorage.getItem('thid');
    this.database.readSubDoc("Users",this.uid,"Notification").subscribe(res=>{
      this.notification=res;
      console.log(res)
    })
  }
}
