import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.page.html',
  styleUrls: ['./doctordetails.page.scss'],
})
export class DoctordetailsPage implements OnInit {
  fullText = `Mauris eget nulla at lacus laoreet condimentum vitae efficitur leo. Vivamus pulvinar, sem vel rhoncus semper, lorem ex dictum diam, at laoreet metus tortor ac justo. Sed in est vitae augue commodo dictum eget a metus. Fusce neque justo, consequat eu risus id, dictum lacinia elit. Sed justo neque, condimentum non congue nec, rutrum at magna.`;
  displayedText: string | undefined;
  showReadMoreButton = true;
  ref: any;
  doctor: any;
  constructor(
    private _rout: ActivatedRoute,
    private _utils: UtilsService,
    private Database: FirestoreService
  ) {
    this.displayedText = this.getLimitedText(this.fullText);
  }

  toggleReadMore() {
    if (this.showReadMoreButton) {
      this.displayedText = this.fullText;
    } else {
      this.displayedText = this.getLimitedText(this.fullText);
    }
    this.showReadMoreButton = !this.showReadMoreButton;
  }

  getLimitedText(text: string): string {
    return text.substring(0, 100); // Adjust as needed.
  }

  ngOnInit() {
    this.ref = this._rout.snapshot.paramMap.get('id');
    console.log(this.ref);
    localStorage.setItem('docId', this.ref);
    this._utils.startspinner();
    this.Database.readDataById('Users', this.ref).subscribe((res) => {
      this.doctor = res;
      localStorage.setItem('names', this.doctor.names);
      localStorage.setItem('img', this.doctor.img);
      localStorage.setItem('docter', this.doctor);
      console.log(res);
      this._utils.dismiss();
    });
  }
}
