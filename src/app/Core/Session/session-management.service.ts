import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  constructor() { }

  // Clear all session storage items
  public signOut(): void {
    window.sessionStorage.clear();
  }

  // Save the token into session storage
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY); // Ensure no previous token is stored
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  // Retrieve the token from session storage
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

}
