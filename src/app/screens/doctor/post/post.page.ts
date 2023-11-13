import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  postForm!: FormGroup;
  user: any;
  ref: any;
  constructor(
    private _builder: FormBuilder,
    private _utils: UtilsService,
    private database: FirestoreService
  ) {}

  ngOnInit() {
    this.ref = localStorage.getItem('thid');
    this.user = this._utils.getArray('thiduser');
    this.postForm = this._builder.group({
      message: ['', Validators.required],
      poster: [this.user.names, Validators.required],
      date: [new Date()],
      posterid: [this.ref],
      img:[this.user.img]
    });
  }

  postCommunity() {
    console.log(this.postForm.value);
    if (this.postForm.valid) {
      this.database.setData("Community",this.postForm.value,this._utils.gerateUid()).then((res)=>{
        this.postForm.value['message']='';
        
      })
    } else {
      this.postForm.markAllAsTouched();
    }
  }
}
