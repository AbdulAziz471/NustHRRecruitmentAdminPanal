
import { Component } from '@angular/core';
import { JobService } from '../../../Core/Services/JobService/job-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-publish-jobs',
  templateUrl: './publish-jobs.component.html',
  styleUrl: './publish-jobs.component.scss'
})
export class PublishJobsComponent {
pendingJobs: any[] = [];
selectedJob: any = {};
  constructor(
    private jobService: JobService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.fetchPendingJobs();
  }
  fetchPendingJobs(): void {
    this.jobService.GetAllPendingJobs().subscribe(
      data => {
        this.pendingJobs = data;
      },
      error => {
        console.error('Error fetching pending jobs:', error);
        Swal.fire('Error', 'Failed to fetch pending jobs.', 'error');
      }
    );
  }

  onEditJob(job: any): void {
    this.selectedJob = job;
  }
}