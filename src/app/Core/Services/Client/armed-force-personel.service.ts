import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../Configs/Config';

@Injectable({
  providedIn: 'root'
})
export class ArmedForcePersonelService {

  constructor(private http: HttpClient,private config :Config) {}
 
  Add(data: any): Observable<any> {
 
    return this.http.post( this.config.apiurl+"ArmedForcesPersonnel/Add", data);
  }
   
  Update(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"ArmedForcesPersonnel/Update", data);
  }
   
  GetById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"ArmedForcesPersonnel/GetById",{params});
  }
}
