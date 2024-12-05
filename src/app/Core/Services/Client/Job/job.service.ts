import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient,private config :Config) {}
  
  Add(data: any): Observable<any> {
 
    return this.http.post( this.config.apiurl+"Job/Add", data);
  }
   
  Update(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"Job/Update", data);
  }
   
  Delete(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.delete( this.config.apiurl+"Job/Delete",{params});
  }
  GetAllList(): Observable<any> {
    return this.http.get( this.config.apiurl+"Job/GetAllList");
  }
  GetById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"Job/GetById",{params});
  }
  GetAllByUser(): Observable<any> {
    return this.http.get( this.config.apiurl+"Job/GetAllByUser");
  }
  
  GetSearchJob(data: any): Observable<any> {
    let params = new HttpParams()
    .set('JobTitle', data.JobTitle)
    .set('JobType', data.JobType)
    .set('JobPostedDate', data.JobPostedDate)
    .set('JobDueDate', data.JobDueDate);
    return this.http.get( this.config.apiurl+"Job/GetSearchJob",{params});
  }
  
}
