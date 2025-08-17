import { TestBed } from '@angular/core/testing';

import { ApiseriveService } from './apiserive.service';

describe('ApiseriveService', () => {
  let service: ApiseriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiseriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
