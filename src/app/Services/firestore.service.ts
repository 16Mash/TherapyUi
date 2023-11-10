import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private _AngularFirestore: AngularFirestore, private utils:UtilsService) { }

  readDataById(collection:any,doc:any){
    return this._AngularFirestore.collection(collection).doc(doc).valueChanges()

  }
  readAllWithID(collection:any){
     return this._AngularFirestore.collection(collection).snapshotChanges()
  }
  readWhereFilter(collection:any,filtername:any,filtervalue:any,filter:any){
      return this._AngularFirestore.collection(collection,ref=> ref.where(filtername,filter,filtervalue))
  }
}
