import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {

  constructor(private http: HttpClient,private config :Config) {}
 
  Add(data: any,experienceFile:File): Observable<any> {
 

    const formData = new FormData();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
  
    if (experienceFile) {
      formData.append('experienceFile', experienceFile);
    }
    return this.http.post( this.config.apiurl+"Employment/Add", formData);
  }
   
  Update(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"Employment/Update", data);
  }
   
  Delete(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.delete( this.config.apiurl+"Employment/Delete",{params});
  }
  GetAllList(): Observable<any> {
    return this.http.get( this.config.apiurl+"Employment/GetAllList");
  }
  GetById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"Employment/GetById",{params});
  }
}
