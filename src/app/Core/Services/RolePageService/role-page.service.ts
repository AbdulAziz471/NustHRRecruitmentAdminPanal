import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../../Configs/Config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolePageService {

   constructor(
      private http: HttpClient,
      private config :Config) {}
      UpdateRolePermission(data: any): Observable<any> {
        return this.http.post( this.config.apiurl+"RolePages/Update", data);
      }
      GetRolePermissionById(Id: string): Observable<any> {
        let params = new HttpParams()
        .set('Id', Id);
        return this.http.get( this.config.apiurl+"RolePages/GetByRoleId",{params});
      }
}
