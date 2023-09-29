import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docternavbar',
  templateUrl: './docternavbar.component.html',
  styleUrls: ['./docternavbar.component.scss'],
})
export class DocternavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  selectedTab: string = 'home'; // Set the default selected tab

  // Function to update the selected tab
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  tabChanged(event: any) {
    this.selectedTab = event.tab;
    console.log("clicked:"+event.tab)
  }

}
