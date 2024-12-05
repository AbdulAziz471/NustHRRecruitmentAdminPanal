import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';
import { SessionManagementService } from '../../../Session/session-management.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private http: HttpClient,private config :Config) {}
 
  Add(data: any): Observable<any> {
 
    return this.http.post( this.config.apiurl+"Family/Add", data);
  }
   
  Update(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"Family/Update", data);
  }
   
  Delete(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.delete( this.config.apiurl+"Family/Delete",{params});
  }
  GetAllList(): Observable<any> {
    return this.http.get( this.config.apiurl+"Family/GetAllList");
  }
  GetById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"Family/GetById",{params});
  }
}
