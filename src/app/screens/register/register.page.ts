import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  regsteForm! :FormGroup;
  user!:User;
  constructor( private _Builder : FormBuilder,private _Auth :AuthService) { 
   this.regsteForm= this._Builder.group({
      FullName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phoneNo:['',Validators.required],
      password:['',Validators.required]

    })
  }

  ngOnInit() {
  }

  createAccount(){
      
    if(this.regsteForm.valid){
      this.user={
        names: this.regsteForm.value["FullName"],
        email: this.regsteForm.value["email"],
        phone: this.regsteForm.value["phoneNo"],
        type: 'user',
      }
      this._Auth.CreateAccount(this.user,this.regsteForm.value["password"])
    }else{
      this.regsteForm.markAllAsTouched()
    }
  }
}
