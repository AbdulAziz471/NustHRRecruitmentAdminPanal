import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';

@Injectable({
  providedIn: 'root'
})
export class ApplyJobService {

  constructor(private http: HttpClient,private config :Config) {}
 
  Add(data: any): Observable<any> {
 
    return this.http.post( this.config.apiurl+"ApplyJob/Add", data);
  }
   
  Update(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"ApplyJob/Update", data);
  }
   
  Delete(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.delete( this.config.apiurl+"ApplyJob/Delete",{params});
  }
  GetAllList(): Observable<any> {
    return this.http.get( this.config.apiurl+"ApplyJob/GetAllList");
  }
  GetById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"ApplyJob/GetById",{params});
  }
  GetRecentJobUpdates(pageNumber: number,pageSize:number): Observable<any> {
    let params = new HttpParams()
    .set('pageNumber', pageNumber)
    .set('pageSize', pageSize);
    return this.http.get( this.config.apiurl+"ApplyJob/GetRecentJobUpdates",{params});
  }
  
  GetUserJobCount(): Observable<any> {
    return this.http.get( this.config.apiurl+"ApplyJob/GetUserJobCount");
  }
  CheckJobEligibility(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"ApplyJob/CheckJobEligibility",{params});
  }
  CheckProfileEligibility(jobId? :string): Observable<any> {
    let params = new HttpParams()
    .set('jobId', jobId!);
    return this.http.get( this.config.apiurl+"ApplyJob/CheckProfileEligibility",{params});
  }

  
  UpdateLoginCount(): Observable<any> {
    return this.http.get( this.config.apiurl+"PersonalInfo/UpdateLoginCount");
  }
  
}
