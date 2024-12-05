import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';

@Injectable({
  providedIn: 'root'
})
export class DdlService {

  constructor(private http: HttpClient,private config :Config) {}
 
  
  GetDropDownByName(fieldName: string): Observable<any> {
    let params = new HttpParams()
    .set('fieldName', fieldName);
    return this.http.get( this.config.apiurl+"DDL/GetDropDownByName",{params});
  }
}
