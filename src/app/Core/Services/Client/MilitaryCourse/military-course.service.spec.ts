import { TestBed } from '@angular/core/testing';

import { MilitaryCourseService } from './military-course.service';

describe('MilitaryCourseService', () => {
  let service: MilitaryCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilitaryCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
