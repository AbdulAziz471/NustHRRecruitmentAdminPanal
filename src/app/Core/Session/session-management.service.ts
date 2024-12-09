import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { userInfo } from '../Interfaces/UserInfo';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})

export class SessionManagementService {

  public userInfo = new BehaviorSubject<userInfo>({  
    
    userId : '',
    userName : '',
    userPic : '',
    email : '',
    confirmedEmail : false,
   });
  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
   
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: userInfo): void {
    this.userInfo.next(user);
    
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
     
      return JSON.parse(user);
    }

    return {};
  }
 

  }
