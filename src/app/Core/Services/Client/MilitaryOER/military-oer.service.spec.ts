import { TestBed } from '@angular/core/testing';

import { MilitaryOERService } from './military-oer.service';

describe('MilitaryOERService', () => {
  let service: MilitaryOERService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilitaryOERService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
