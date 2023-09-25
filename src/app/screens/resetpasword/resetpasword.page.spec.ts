import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetpaswordPage } from './resetpasword.page';

describe('ResetpaswordPage', () => {
  let component: ResetpaswordPage;
  let fixture: ComponentFixture<ResetpaswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResetpaswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
