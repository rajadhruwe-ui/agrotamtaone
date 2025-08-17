import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmRegistrationPage } from './farm-registration.page';

describe('FarmRegistrationPage', () => {
  let component: FarmRegistrationPage;
  let fixture: ComponentFixture<FarmRegistrationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FarmRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
