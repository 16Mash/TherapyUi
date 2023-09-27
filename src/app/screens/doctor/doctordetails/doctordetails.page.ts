import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.page.html',
  styleUrls: ['./doctordetails.page.scss'],
})
export class DoctordetailsPage implements OnInit {
  fullText = `Mauris eget nulla at lacus laoreet condimentum vitae efficitur leo. Vivamus pulvinar, sem vel rhoncus semper, lorem ex dictum diam, at laoreet metus tortor ac justo. Sed in est vitae augue commodo dictum eget a metus. Fusce neque justo, consequat eu risus id, dictum lacinia elit. Sed justo neque, condimentum non congue nec, rutrum at magna.`;
  displayedText: string|undefined;
  showReadMoreButton = true;
  constructor( ) {
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
    // Implement a function to limit the text to a certain number of characters or lines
    // For example, you can use text.substring(0, 200) to limit to the first 200 characters.
    return text.substring(0, 100); // Adjust as needed.
  }

  ngOnInit() {
  }
  
  

}
