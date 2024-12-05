import { TestBed } from '@angular/core/testing';

import { AwardScholarshipService } from './award-scholarship.service';

describe('AwardScholarshipService', () => {
  let service: AwardScholarshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwardScholarshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
