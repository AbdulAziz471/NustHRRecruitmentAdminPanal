import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishJobsComponent } from './publish-jobs.component';

describe('PublishJobsComponent', () => {
  let component: PublishJobsComponent;
  let fixture: ComponentFixture<PublishJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
