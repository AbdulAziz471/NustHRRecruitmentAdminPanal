import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../../Configs/Config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private config :Config) {}
    AddUser(data: any): Observable<any> {
 
      return this.http.post( this.config.apiurl+"AdminUser/Add", data);
    }
    UpdateUser(data: any): Observable<any> {
      return this.http.post( this.config.apiurl+"AdminUser/Update", data);
    }
    GetAllUsersList(): Observable<any> {
      return this.http.get( this.config.apiurl+"AdminUser/GetAll");
    }
    GetUserById(Id: string): Observable<any> {
      let params = new HttpParams()
      .set('Id', Id);
      return this.http.get( this.config.apiurl+"AdminUser/GetById",{params});
    }
  }
