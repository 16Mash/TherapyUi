import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UtilsService } from './utils.service';
import { Router } from '@angular/router';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: User;
  constructor(
    private _auth: AngularFireAuth,
    private _firestore: AngularFirestore,
    private _spinnner: UtilsService,
    private _router: Router,
  ) {}

  async CreateAccount(user: User, password: any) {
    this._spinnner.startspinner();
    await this._auth
      .createUserWithEmailAndPassword(user.email, password)
      .then(async (result) => {
        const id= result.user?.uid.toString()
          if(id)
          {
            localStorage.setItem("thid",id)
          }
     
        this._firestore
          .collection('Users')
          .doc(result.user?.uid)
          .set(user)
          .then((result) => {
            this._spinnner.dismiss();
            localStorage.setItem('thiduser', JSON.stringify(user));
            this._router.navigateByUrl('/user');
           
          })
          .catch((error) => {
            this._spinnner.dismiss();
            this._spinnner.presentAlert(error.message,"Error")

          });
      })
      .catch(async (e) => {
        console.log(e.message['Firebase']);
        console.log(e.message.FirebaseError);
        this._spinnner.dismiss();
        this._spinnner.presentAlert(e.message,"Error")
      });
  }

  signIn(login: any) {
    this._spinnner.startspinner();
    this._auth
      .signInWithEmailAndPassword(login['email'], login['password'])
      .then((result) => {
        this._firestore
          .collection('Users')
          .doc(result.user?.uid)
          .get()
          .subscribe((res) => {
            this._spinnner.dismiss();
            if (res.exists) {
              const data = res.data() as User;
              const names = data.names;
              localStorage.setItem('thid', res.id);
              localStorage.setItem('thiduser', JSON.stringify(data));
              if ( data.type == 'user') {
                this._router.navigateByUrl('/user');
              } else if (data.type == 'doctor') {
                this._router.navigateByUrl('/doctor');
              }  else {
                this._spinnner.dismiss();
                this._spinnner.presentAlert("Coulnt find your profile","Error")
                this.logout();
              }
            } else {
              this._spinnner.dismiss();
              this._spinnner.presentAlert("Coulnt find your profile","Error")
              this.logout();
            }
          });
      })
      .catch((e) => {
        this._spinnner.dismiss();
        this._spinnner.presentAlert(e.message,"Error")

      });
  }
  logout() {
    this._auth.signOut().then(() => {
      localStorage.clear();
      this._router.navigateByUrl('/login');
    });
  }
}
