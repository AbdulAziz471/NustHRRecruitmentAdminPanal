import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionManagementService } from '../Session/session-management.service';
import { Config } from '../Configs/Config';

const TOKEN_HEADER_KEY = 'Authorization'; 
// const APP_KEY_HEADER = 'AppKey'; // Commented out

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private tokenService: SessionManagementService, private config: Config) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.tokenService.getToken();
    // const appKey = this.config.apikey; // Commented out

    // Modify the headers only once by cloning the request a single time
    // authReq = req.clone({ 
    //   headers: req.headers.set(APP_KEY_HEADER, appKey) // Commented out
    // });

    if (token != null) {
      // Add the Authorization header to the already modified authReq
      authReq = authReq.clone({ 
        headers: authReq.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
      });
    }

    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
];
