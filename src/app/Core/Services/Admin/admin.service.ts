import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../../Configs/Config';
import { SessionManagementService } from '../../Session/session-management.service';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
    private config: Config,
    private sessionManagement: SessionManagementService
  ) {}

  getUserPagesById(userId: string): Observable<any> {
    const url = `${this.config.apiurl}AdminUser/GetUserPagesById`;
    const params = new HttpParams().set('Id', userId);
    return this.http.get(url, { params: params })
      .pipe(
        catchError((error: any) => {
          throw 'error in getting user pages: ' + error;
        })
      );
  }
}