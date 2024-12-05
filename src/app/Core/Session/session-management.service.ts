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
   public jobInfo: any = {  
    JobId : '',
    JobTitle : '',
    JobDueDate : ''
   };
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
  public saveJob(id: string,title: string,duedate:string): void {
    window.sessionStorage.removeItem('JobId');
    window.sessionStorage.removeItem('JobTitle');
    window.sessionStorage.removeItem('JobDueDate');
    
    window.sessionStorage.setItem('JobId', JSON.stringify(id));
    window.sessionStorage.setItem('JobTitle', JSON.stringify(title));
    window.sessionStorage.setItem('JobDueDate', JSON.stringify(duedate));
  }
  public RemoveJobId(): void {
    window.sessionStorage.removeItem('JobId');
    window.sessionStorage.removeItem('JobTitle');
    window.sessionStorage.removeItem('JobDueDate');
  }
  public getJob(): any {
    this.jobInfo.JobId= window.sessionStorage.getItem('JobId');
    this.jobInfo.JobTitle= window.sessionStorage.getItem('JobTitle');
    this.jobInfo.JobDueDate= window.sessionStorage.getItem('JobDueDate');
    if (this.jobInfo.JobId) {
      this.jobInfo.JobId=JSON.parse(this.jobInfo.JobId);
      this.jobInfo.JobTitle=JSON.parse(this.jobInfo.JobTitle);
      this.jobInfo.JobDueDate=JSON.parse(this.jobInfo.JobDueDate);
      return this.jobInfo;
    }

    return null;
  }
  public getUserInfoObservable() {
    return this.userInfo.asObservable();
  }
}
