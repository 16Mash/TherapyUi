import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../Services/utils.service';
import { FirestoreService } from '../Services/firestore.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  doctors:any;
  constructor(
    private _utils: UtilsService,
    private database: FirestoreService,
    private _auth: AuthService
  ) {}
  ngOnInit(): void {
    this.user = this._utils.getArray('thiduser');
    console.log(this.user);

    if (this.user.type != 'user') {
      this._auth.logout();
    }

    this.database
      .readWhereFilter('Users', 'type', 'doctor', '==')
      .snapshotChanges()
      .subscribe((res) => {
        console.log(res)
        this.doctors=res
      });
  }
}
