import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {

  chat:boolean=false;
  video:boolean=false;
  call:boolean=false

  contactName = 'Dr Mashaba'; 
  newMessage = '';
  messages: any[] = [
    { text: 'Hello!', sender: 'user', timestamp: new Date() },
    { text: 'Hi there!', sender: 'contact', timestamp: new Date() },
    { text: 'How are you', sender: 'contact', timestamp: new Date() },

  ];

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const message = {
        text: this.newMessage,
        sender: 'user',
        timestamp: new Date(),
      };
      this.messages.push(message);
      this.newMessage = '';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
