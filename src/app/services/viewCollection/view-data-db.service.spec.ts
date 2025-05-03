import { TestBed } from '@angular/core/testing';

import { ViewDataDBService } from './view-data-db.service';

describe('ViewDataDBService', () => {
  let service: ViewDataDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDataDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
