import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient,private config :Config) {}
 
  
  Update(data: any): Observable<any> {
    
    return this.http.post( this.config.apiurl+"PersonalInfo/Update", data);
  }
  UploadProfilePic(Id: string,file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('Id', Id);
    if (file != undefined) {
      formData.append('ProfilePic', file);
    }
    return this.http.post( this.config.apiurl+"PersonalInfo/UploadProfilePic", formData);
  }
  GetPersonalInfo(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"PersonalInfo/GetPersonalInfo",{params});
  }
  GetById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"PersonalInfo/GetById",{params});
  }
}
