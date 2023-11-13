import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpcommingPage } from './upcomming.page';

describe('UpcommingPage', () => {
  let component: UpcommingPage;
  let fixture: ComponentFixture<UpcommingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpcommingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
