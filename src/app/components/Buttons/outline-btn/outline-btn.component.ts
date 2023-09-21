import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-outline-btn',
  templateUrl: './outline-btn.component.html',
  styleUrls: ['./outline-btn.component.scss'],
})
export class OutlineBtnComponent  implements OnInit {

  @Input() text:string|undefined;
  @Input() icon:string|undefined;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

}
