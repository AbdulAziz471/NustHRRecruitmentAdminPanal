import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {

  constructor(private http: HttpClient,private config :Config) {}
 
  Add(data: any,degreeFile:File,transcriptFile:File): Observable<any> {
    const formData = new FormData();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
    if (degreeFile) {
      formData.append('degreeFile', degreeFile);
    }
  
    if (transcriptFile) {
      formData.append('transcriptFile', transcriptFile);
    }
    return this.http.post( this.config.apiurl+"Academic/Add", formData);

  }
   
  Update(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"Academic/Update", data);
  }
   
  Delete(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.delete( this.config.apiurl+"Academic/Delete",{params});
  }
  GetAllList(): Observable<any> {
    return this.http.get( this.config.apiurl+"Academic/GetAllList");
  }
  GetById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"Academic/GetById",{params});
  }
}
