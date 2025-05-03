import { TestBed } from '@angular/core/testing';

import { DocDeleteService } from './doc-delete.service';

describe('DocDeleteService', () => {
  let service: DocDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
