import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctordetailsPage } from './doctordetails.page';

describe('DoctordetailsPage', () => {
  let component: DoctordetailsPage;
  let fixture: ComponentFixture<DoctordetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DoctordetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
