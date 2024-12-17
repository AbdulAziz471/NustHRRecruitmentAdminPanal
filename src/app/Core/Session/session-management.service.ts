import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {
  constructor() {}

  public signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    return token;
  }
  public saveUserDetails(userDetails: any) {
    console.log('Saving user details:', userDetails);
    sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
  }
  
  public getUserId(): string | null {
    const userDetails = sessionStorage.getItem('userDetails');
    console.log('Retrieved user details:', userDetails);
    return userDetails ? JSON.parse(userDetails).userId : null;
  }
  
  
}
