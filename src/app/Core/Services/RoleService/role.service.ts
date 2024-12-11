import { Injectable } from '@angular/core';
import { Config } from '../../Configs/Config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private http: HttpClient,
    private config :Config) {}
    AddRole(data: any): Observable<any> {
 
      return this.http.post( this.config.apiurl+"Role/Add", data);
    }
    UpdateRole(data: any): Observable<any> {
      return this.http.post( this.config.apiurl+"Role/Update", data);
    }
    GetAllRolesList(): Observable<any> {
      return this.http.get( this.config.apiurl+"Role/GetAll");
    }
    GetRoleById(Id: string): Observable<any> {
      let params = new HttpParams()
      .set('Id', Id);
      return this.http.get( this.config.apiurl+"Role/GetById",{params});
    }
  }

