import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';

@Injectable({
  providedIn: 'root'
})
export class MilitaryOERService {

  constructor(private http: HttpClient,private config :Config) {}
 
  Add(data: any): Observable<any> {
 
    return this.http.post( this.config.apiurl+"MilitaryOER/Add", data);
  }
   
  Update(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"MilitaryOER/Update", data);
  }
   
  Delete(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.delete( this.config.apiurl+"MilitaryOER/Delete",{params});
  }
  GetAllList(): Observable<any> {
    return this.http.get( this.config.apiurl+"MilitaryOER/GetAllList");
  }
  GetById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"MilitaryOER/GetById",{params});
  }
}
