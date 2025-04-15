import { TestBed } from '@angular/core/testing';

import { GetIdentityService } from './get-identity.service';

describe('GetIdentityService', () => {
  let service: GetIdentityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetIdentityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
