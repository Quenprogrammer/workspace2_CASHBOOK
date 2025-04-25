import { TestBed } from '@angular/core/testing';

import { GetCollectionCountService } from './get-collection-count.service';

describe('GetCollectionCountService', () => {
  let service: GetCollectionCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCollectionCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
