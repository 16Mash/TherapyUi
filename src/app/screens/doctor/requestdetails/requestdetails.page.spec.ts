import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestdetailsPage } from './requestdetails.page';

describe('RequestdetailsPage', () => {
  let component: RequestdetailsPage;
  let fixture: ComponentFixture<RequestdetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RequestdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
