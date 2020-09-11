import { TestBed } from '@angular/core/testing';

import { AuthheaderinterceptorService } from './authheaderinterceptor.service';

describe('AuthheaderinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthheaderinterceptorService = TestBed.get(AuthheaderinterceptorService);
    expect(service).toBeTruthy();
  });
});
