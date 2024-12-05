import { TestBed } from '@angular/core/testing';

import { DdlService } from './ddl.service';

describe('DdlService', () => {
  let service: DdlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
