import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.scss'],
})
export class UsernavbarComponent  implements OnInit {

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
