import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Config } from '../../Configs/Config';
import { SessionManagementService } from '../../Session/session-management.service';
import { LoginResponse } from '../../Interfaces/LoginResponse.interface'; // Import the interface

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 

  constructor(private http: HttpClient,private config :Config,private sessionManagement: SessionManagementService) {}
 signIn(data: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.config.apiurl + "Auth/signIn", data)
      .pipe(
        tap(response => {
          this.sessionManagement.saveToken(response.accessToken); // Save the access token
          this.sessionManagement.saveUserDetails({
            userId: response.userId, 
            userName: response.userName, 
            email: response.email 
          }); 
        })
      );
  }
  isAuthenticated(): boolean {
    return !!this.sessionManagement.getToken();
  }

 
 
}


