import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-requestdetails',
  templateUrl: './requestdetails.page.html',
  styleUrls: ['./requestdetails.page.scss'],
})
export class RequestdetailsPage implements OnInit {
ref:any;
request:any;
  constructor(    private _rout: ActivatedRoute,
    private _utils: UtilsService,
    private Database: FirestoreService) { }

  ngOnInit() {
    this._utils.startspinner()
    this.ref = this._rout.snapshot.paramMap.get('id');
    console.log(this.ref);
    this.Database.readDataById('Sessions', this.ref).subscribe((res) => {
      console.log(res);
      this.request = res;
      this._utils.dismiss();
    });
  }

}
