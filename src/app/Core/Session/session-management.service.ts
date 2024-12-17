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
    console.log('Saving token:', token); // Log the token to check what is being saved
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    console.log('Retrieved token:', token); // Log the retrieved token to check its format
    return token;
  }
}
