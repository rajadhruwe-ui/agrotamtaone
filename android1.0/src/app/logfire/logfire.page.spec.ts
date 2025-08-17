import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogfirePage } from './logfire.page';

describe('LogfirePage', () => {
  let component: LogfirePage;
  let fixture: ComponentFixture<LogfirePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogfirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
