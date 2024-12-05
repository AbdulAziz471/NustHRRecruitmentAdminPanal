import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient,private config :Config) {}
 
  Add(data: any,publicationFile :File): Observable<any> {
 

    const formData = new FormData();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
  
    if (publicationFile) {
      formData.append('publicationFile', publicationFile);
    }
    
    return this.http.post( this.config.apiurl+"Publication/Add", formData);
  }
   
  Update(data: any,publicationFile :File): Observable<any> {
    const formData = new FormData();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
  
    if (publicationFile) {
      formData.append('publicationFile', publicationFile);
    }
   
    return this.http.post( this.config.apiurl+"Publication/Update", formData);
  }
   
  Delete(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.delete( this.config.apiurl+"Publication/Delete",{params});
  }
  GetAllList(): Observable<any> {
    return this.http.get( this.config.apiurl+"Publication/GetAllList");
  }
  GetById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"Publication/GetById",{params});
  }
  GetSinglePublication(): Observable<any> {
    return this.http.get( this.config.apiurl+"Publication/GetSingleRecord");
  }
}
