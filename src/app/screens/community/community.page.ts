import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  user: any;
  comm:any;
  constructor(
    private _utils: UtilsService,
    private database: FirestoreService,
    private _auth: AuthService
  ) {}

  ngOnInit() {
    this.user = this._utils.getArray('thiduser');
    console.log(this.user);

    this.database.readAllWithID("Community").subscribe(res=>{
      console.log("this",res)
      this.comm =res;
    })

  }
}
