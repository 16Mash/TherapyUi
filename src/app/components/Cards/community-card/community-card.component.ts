import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.scss'],
})
export class CommunityCardComponent  implements OnInit {
  @Input() names:string|undefined;
  @Input() message:string="";
  @Input() date:string|undefined;
  @Input() title:string|undefined;
  @Input() image:string|undefined;
  @Input() likes:string|undefined;
  @Input() comments:string|undefined;
  @Input() isComing:Boolean=true;

 
  displayedText: string|undefined;
  showReadMoreButton = false;
  constructor() {
    this.displayedText = this.getLimitedText(this.message);
   }

  ngOnInit() {
    this.displayedText = this.getLimitedText(this.message);
    if(this.message.length>100)
    {
        this.showReadMoreButton=true;
    }
  }

  toggleReadMore() {
    if (this.showReadMoreButton) {
      this.displayedText = this.message;
    } else {
      this.displayedText = this.getLimitedText(this.message);
    }
    this.showReadMoreButton = !this.showReadMoreButton;
  }

  getLimitedText(text: string): string {
    // Implement a function to limit the text to a certain number of characters or lines
    // For example, you can use text.substring(0, 200) to limit to the first 200 characters.
    return text.substring(0, 100); // Adjust as needed.
  }

}
