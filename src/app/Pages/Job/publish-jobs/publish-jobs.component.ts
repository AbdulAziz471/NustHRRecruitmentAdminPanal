
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
  jobForm!: FormGroup;

  constructor(
    private jobService: JobService,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.fetchPendingJobs();
  }

  initForm(): void {
    this.jobForm = this.fb.group({
      lQalamJobId: ['', Validators.required],
      sJobTitle: ['', Validators.required], 
      sJobType: ['', Validators.required],  
      sJobLocation: ['', Validators.required],  
      lMinimumQualificationId: ['', Validators.required],  
      sExperience: ['', Validators.required],  
      sJobDescription: ['', Validators.required],  
      sSkillsRequired: ['', Validators.required],  
      terms: ['', Validators.required],  
      sQualification: ['', Validators.required],  
    });
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
    this.jobForm.setValue({
      lQalamJobId: job.lQalamJobId,
      sJobTitle: job.sJobTitle,
      sJobType: job.sJobType,
      sJobLocation: job.sJobLocation,
      lMinimumQualificationId: job.lMinimumQualificationId,
      sExperience: job.sExperience,
      sJobDescription: job.sJobDescription,
      sSkillsRequired: job.sSkillsRequired,
      terms: job.terms,
      sQualification: job.sQualification
    });
  }
}