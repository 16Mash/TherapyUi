import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  bookForm!: FormGroup;
  docter: any;
  docId: any;
  userId: any;
  user:any;
  docImg: any;
  docNames: any;
  constructor(
    private _builder: FormBuilder,
    private Database: FirestoreService,
    private utils: UtilsService,
    private _route:Router,
  ) {}

  ngOnInit() {
    this.docId = localStorage.getItem('docId');
    this.docter = localStorage.getItem('docter');
    console.log(this.docter.names);
    this.user = this.utils.getArray("thiduser")
    this.userId = localStorage.getItem('thid');
    this.bookForm = this._builder.group({
      docter: [this.docId],
      docterName: [localStorage.getItem('names')],
      img: [localStorage.getItem('img')],
      user: [this.userId],
      username:[this.user.names],
      type: ['chat', [Validators.required]],
      status: ['new'],
    });
  }
  book() {
    console.log(this.bookForm.value);
    if (this.bookForm.valid) {
      // this.Database.setData("Sessions",this.bookForm.value,this.utils.gerateUid()).then(()=>
    
      // )
      this.Database.setDataNotification("Sessions",this.bookForm.value,this.utils.gerateUid(),this.docId).then(()=>{
          this._route.navigateByUrl('user/home')
      })
    }
  }
}
