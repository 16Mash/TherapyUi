import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor( private _navigatoion :NavController) { }

  ngOnInit() {
  }

  navigate(url:any){
    this._navigatoion.navigateForward("/user/profile"+url)
  }

}
