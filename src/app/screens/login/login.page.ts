import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!:FormGroup;
  constructor(private _formBuilder: FormBuilder,private _auth :AuthService) {
    this.loginForm = this._formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
    })
   }

  ngOnInit() {
  }

  login(){
    
    if(this.loginForm.valid)
    {
        this._auth.signIn(this.loginForm.value)
    }else{
      this.loginForm.markAllAsTouched()
    }
  }

}
