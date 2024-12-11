import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../../Configs/Config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(
    private http: HttpClient,
    private config :Config) {}
    AddPage(data: any): Observable<any> {
 
      return this.http.post( this.config.apiurl+"Page/Add", data);
    }
    UpdatePage(data: any): Observable<any> {
      return this.http.post( this.config.apiurl+"Page/Update", data);
    }
    GetAllPages(): Observable<any> {
      return this.http.get( this.config.apiurl+"Page/GetAll");
    }
    GetPageById(Id: string): Observable<any> {
      let params = new HttpParams()
      .set('Id', Id);
      return this.http.get( this.config.apiurl+"Page/GetById",{params});
    }
  }

