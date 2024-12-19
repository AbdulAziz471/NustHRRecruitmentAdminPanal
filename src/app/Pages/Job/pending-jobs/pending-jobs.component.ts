import { Component } from '@angular/core';
import { JobService } from '../../../Core/Services/JobService/job-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pending-jobs',
  templateUrl: './pending-jobs.component.html',
  styleUrl: './pending-jobs.component.scss'
})
export class PendingJobsComponent {
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

  onUpdate(): void {
    if (!this.jobForm.valid) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      return;
    }
    
    this.jobService.UpdatePendingJob(this.jobForm.value).subscribe({
      next: () => {
        Swal.fire('Success', 'Job has been updated.', 'success');
        this.fetchPendingJobs();  // Refresh the list after update
      },
      error: (error) => {
        console.error('Error updating job:', error);
        Swal.fire('Error', 'Failed to update job.', 'error');
      }
    });
  }

}