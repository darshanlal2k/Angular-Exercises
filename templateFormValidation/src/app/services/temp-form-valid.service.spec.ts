import { TestBed } from '@angular/core/testing';

import { TempFormValidService } from './temp-form-valid.service';

describe('TempFormValidService', () => {
  let service: TempFormValidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempFormValidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
