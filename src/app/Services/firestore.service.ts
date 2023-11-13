import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(
    private _AngularFirestore: AngularFirestore,
    private utils: UtilsService
  ) {}

  readDataById(collection: any, doc: any) {
    return this._AngularFirestore
      .collection(collection)
      .doc(doc)
      .valueChanges();
  }
  readAllWithID(collection: any) {
    return this._AngularFirestore.collection(collection).snapshotChanges();
  }
  readWhereFilter(
    collection: any,
    filtername: any,
    filtervalue: any,
    filter: any
  ) {
    return this._AngularFirestore.collection(collection, (ref) =>
      ref.where(filtername, filter, filtervalue)
    );
  }

  //set data
  setData(collection: string, data: any, doc: any) {
    this.utils.startspinner();
    return this._AngularFirestore
      .collection(collection)
      .doc(doc)
      .set(data)
      .then(() => {
        this.utils.dismiss();
        this.utils.presentToast('top', 'Saved Successfully');
      })
      .catch((err) => {
        this.utils.dismiss();
        this.utils.presentToast('bottom', err.message);
      });
  }
  setDataNotification(collection: any, data: any, doc: any, docNotify: any) {
    this.utils.startspinner();
  return  this._AngularFirestore
      .collection(collection)
      .doc(doc)
      .set(data)
      .then(() => {
        this._AngularFirestore
          .collection('Users')
          .doc(docNotify)
          .collection('Notification')
          .doc(doc)
          .set({'title':'New request','msg':data.username+'Has requested a session'}).then(()=>{
            this.utils.dismiss()
            this.utils.presentToast('top',"Booked")
          })
      });
  }

  countRequest(collection:any,uid:any,status:any,)
  {
    return this._AngularFirestore.collection(collection,ref=>ref.where("status",'==',status).where('docter','==',uid))
  }
}
