import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationpagePage } from './registrationpage.page';

describe('RegistrationpagePage', () => {
  let component: RegistrationpagePage;
  let fixture: ComponentFixture<RegistrationpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrationpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
