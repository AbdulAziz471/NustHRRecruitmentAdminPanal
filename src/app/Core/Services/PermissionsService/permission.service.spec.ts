import { TestBed } from '@angular/core/testing';

import { PermisssionService } from './permission.service';

describe('PermisssionService', () => {
  let service: PermisssionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisssionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
// 