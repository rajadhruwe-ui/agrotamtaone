import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubesPage } from './youtubes.page';

describe('YoutubesPage', () => {
  let component: YoutubesPage;
  let fixture: ComponentFixture<YoutubesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YoutubesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
