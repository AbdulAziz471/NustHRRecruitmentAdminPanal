import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient,private config :Config) {}
 
  Add(data: any): Observable<any> {
 
    return this.http.post( this.config.apiurl+"ContactInPak/Add", data);
  }
   
  Update(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"ContactInPak/Update", data);
  }
   
  Delete(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.delete( this.config.apiurl+"ContactInPak/Delete",{params});
  }
  GetAllList(): Observable<any> {
    return this.http.get( this.config.apiurl+"ContactInPak/GetAllList");
  }
  GetById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"ContactInPak/GetById",{params});
  }
  AddContactInfo(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"Contact/Add", data);
  }
  UpdateContactInfo(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"Contact/Update", data);
  }
  GetContactInfoById(Id: string): Observable<any> {
    let params = new HttpParams()
    .set('Id', Id);
    return this.http.get( this.config.apiurl+"Contact/GetById",{params});
  }
}
