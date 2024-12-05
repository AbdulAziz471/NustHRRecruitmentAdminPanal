import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient,private config :Config) {}
 
  Add(data: any,certificateFile :File): Observable<any> {
 
  

    const formData = new FormData();
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
  
    if (certificateFile) {
      formData.append('certificateFile', certificateFile);
    }
    
    return this.http.post( this.config.apiurl+"ProfessionalCertificate/Add", formData);
  }
   
  Update(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"ProfessionalCertificate/Update", data);
  }
   
  Delete(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.delete( this.config.apiurl+"ProfessionalCertificate/Delete",{params});
  }
  GetAllList(): Observable<any> {
    return this.http.get( this.config.apiurl+"ProfessionalCertificate/GetAllList");
  }
  GetById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"ProfessionalCertificate/GetById",{params});
  }
}
