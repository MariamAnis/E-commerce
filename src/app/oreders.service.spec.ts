import { TestBed } from '@angular/core/testing';

import { OredersService } from './oreders.service';

describe('OredersService', () => {
  let service: OredersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OredersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
