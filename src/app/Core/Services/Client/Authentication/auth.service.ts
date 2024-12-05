import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../Configs/Config';
import { SessionManagementService } from '../../../Session/session-management.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 

  constructor(private http: HttpClient,private config :Config,private sessionManagement: SessionManagementService) {}
 
  isAuthenticated(): boolean {
    return !!this.sessionManagement.getToken();
  }
  signUp(data: any): Observable<any> {
    return this.http.post( this.config.apiurl+"Account/signUp", data);
  }
 
  
 signIn(data: any): Observable<any> {

    return this.http.post(this.config.apiurl+"Account/signIn", data);
  }


  forgetPassword(email: string): Observable<any> {
    let params = new HttpParams()
    .set('email', email);
    return this.http.get(this.config.apiurl+"Account/forgetPassword",{params});
  }
  resetPassword(data: any): Observable<any> {
    return this.http.post(this.config.apiurl+"Account/ResetPassword",data);
  }
  changePassword(data: any): Observable<any> {
    return this.http.post(this.config.apiurl+"Account/ChangePassword",data);
  }
  
  confirmEmail(userId: string,token :string): Observable<any> {
    let params = new HttpParams()
    .set('userId', userId)
    .set('token', token);
    return this.http.get( this.config.apiurl+"Account/ConfirmEmail",{params});
  }
 
}


