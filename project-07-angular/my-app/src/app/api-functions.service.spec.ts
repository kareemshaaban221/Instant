import { TestBed } from '@angular/core/testing';

import { ApiFunctionsService } from './api-functions.service';

describe('ApiFunctionsService', () => {
  let service: ApiFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
