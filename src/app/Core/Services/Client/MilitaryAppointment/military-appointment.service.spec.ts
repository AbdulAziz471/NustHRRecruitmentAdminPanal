import { TestBed } from '@angular/core/testing';

import { MilitaryAppointmentService } from './military-appointment.service';

describe('MilitaryAppointmentService', () => {
  let service: MilitaryAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilitaryAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
