import { TestBed } from '@angular/core/testing';

import { ArmedForcePersonelService } from './armed-force-personel.service';

describe('ArmedForcePersonelService', () => {
  let service: ArmedForcePersonelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmedForcePersonelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
