import { TestBed } from '@angular/core/testing';

import { PVEDataFetcherService } from './pvedata-fetcher.service';

describe('PVEDataFetcherService', () => {
  let service: PVEDataFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PVEDataFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
