import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZoomMeetingPage } from './zoom-meeting.page';

describe('ZoomMeetingPage', () => {
  let component: ZoomMeetingPage;
  let fixture: ComponentFixture<ZoomMeetingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZoomMeetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
