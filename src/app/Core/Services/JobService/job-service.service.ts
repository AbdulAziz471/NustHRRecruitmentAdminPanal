import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../../Configs/Config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
     private http: HttpClient,
     private config :Config) {}
     UpdatePendingJob(data: any): Observable<any> {
       return this.http.post( this.config.apiurl+"QalamJobPost/Update", data);
     }
     GetAllPublishJobs(): Observable<any> {
       return this.http.get( this.config.apiurl+"QalamJobPost/GetPublishedJob");
     }
     GetAllPendingJobs(): Observable<any> {
      return this.http.get( this.config.apiurl+"QalamJobPost/GetPendingJob");
    }
     GetPendingJobById(Id: string): Observable<any> {
       let params = new HttpParams()
       .set('Id', Id);
       return this.http.get( this.config.apiurl+"AdminUser/GetById",{params});
     }
}
