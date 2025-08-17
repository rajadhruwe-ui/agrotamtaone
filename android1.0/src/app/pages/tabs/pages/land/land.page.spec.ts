import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandPage } from './land.page';

describe('LandPage', () => {
  let component: LandPage;
  let fixture: ComponentFixture<LandPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
