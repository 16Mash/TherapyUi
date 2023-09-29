import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorhomePage } from './doctorhome.page';

describe('DoctorhomePage', () => {
  let component: DoctorhomePage;
  let fixture: ComponentFixture<DoctorhomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DoctorhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
