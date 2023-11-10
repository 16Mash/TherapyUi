import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  ref:any;
  user :any
  constructor( private _navigatoion :NavController,private Databse :FirestoreService,private utils :UtilsService) { }

  ngOnInit() {
    this.utils.startspinner()
    this.ref = localStorage.getItem('thid');
    this.Databse.readDataById("Users",this.ref).subscribe( res=>{
      this.user=res;
      console.log(this.user)
      this.utils.dismiss()
    })
  }

  navigate(url:any){
    this._navigatoion.navigateForward("/user/home/profile"+url)
  }

}
