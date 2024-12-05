import { Injectable } from '@angular/core';
import { ApplyJobService } from '../ApplyJob/apply-job.service';
import { SessionManagementService } from '../../../Session/session-management.service';

@Injectable({
  providedIn: 'root'
})
export class SideNavbarService {
  private profileEligibility: any = {  
    value : '',
    Text : '',
    status : ''
   };
   jobInfo: any = {  
    JobId : '',
    JobTitle : '',
    JobDueDate : ''
   };
  jobId=''
  constructor(private applyJobService :ApplyJobService,private sessionManagement: SessionManagementService) {
  this.jobInfo = this.sessionManagement.getJob(); 
  this.CheckProfileEligibility();
  }


  
  
  CheckProfileEligibility(): any {
   
    if(this.jobInfo?.JobId!=undefined)
    {
      this.jobId=this.jobInfo.JobId;
    }
    
    this.applyJobService.CheckProfileEligibility(this.jobId!)
    .subscribe(
      (response: any) => {
     
        this.profileEligibility=response;
      }
    )
  }
  isSectionEnabled(index :number): boolean {
    if(this.profileEligibility.value=='')
    {
      return false;
    }
    return this.profileEligibility[index].status;
  } 
}
