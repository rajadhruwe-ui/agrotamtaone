import { TestBed } from '@angular/core/testing';

import { FireserveService } from './fireserve.service';

describe('FireserveService', () => {
  let service: FireserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
