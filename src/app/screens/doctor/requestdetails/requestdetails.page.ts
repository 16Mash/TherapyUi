import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-requestdetails',
  templateUrl: './requestdetails.page.html',
  styleUrls: ['./requestdetails.page.scss'],
})
export class RequestdetailsPage implements OnInit {
  ref: any;
  request: any;
  date!:Date;
  selectedDate!: string;
  hoursArray: string[] = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
  ];
  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };

  sessionForm!:FormGroup;
  constructor(
    private _rout: ActivatedRoute,
    private _utils: UtilsService,
    private Database: FirestoreService,
    private _router:Router,
    private _builder:FormBuilder,
  ) {
    this.sessionForm = this._builder.group({
      status:['Accepted'],
      date:[''],
      time:['',Validators.required]
    })
  }

  ngOnInit() {
    this._utils.startspinner();
    this.ref = this._rout.snapshot.paramMap.get('id');
    console.log(this.ref);
    this.Database.readDataById('Sessions', this.ref).subscribe((res) => {
      console.log(res);
      this.request = res;
      this._utils.dismiss();
    });
  }

  reject() {
    this.Database.setDataUpdateNotification(
      'Sessions',
      { status: 'rejected' },
      this.ref,
      this.request.user,
      'Session:' + this.ref + 'Rejected'
    ).then(()=>{
      this._router.navigateByUrl('/request')
    })
  }

  Accepts(){
    if(this.sessionForm.valid){
      this.sessionForm.value['date']=this.date
      console.log(this.sessionForm.value)
      this.Database.setDataUpdateNotification(
        'Sessions',
        this.sessionForm.value,
        this.ref,
        this.request.user,
        'Session:' + this.ref + 'Accepted'
      ).then(()=>{
        this._router.navigateByUrl('/request')
      })
    }else{
      this.sessionForm.markAllAsTouched()
    }
  }
}
