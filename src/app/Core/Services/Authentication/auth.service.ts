import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../Configs/Config';
import { SessionManagementService } from '../../Session/session-management.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 

  constructor(private http: HttpClient,private config :Config,private sessionManagement: SessionManagementService) {}
 
  isAuthenticated(): boolean {
    return !!this.sessionManagement.getToken();
  }
 signIn(data: any): Observable<any> {

    return this.http.post(this.config.apiurl+"Auth/signIn", data ,{ responseType: 'text' });
  }


 
 
}


