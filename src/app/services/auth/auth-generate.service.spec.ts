import { TestBed } from '@angular/core/testing';

import { AuthGenerateService } from './auth-generate.service';

describe('AuthGenerateService', () => {
  let service: AuthGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
