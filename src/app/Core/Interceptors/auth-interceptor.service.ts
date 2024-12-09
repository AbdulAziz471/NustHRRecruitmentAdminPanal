import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionManagementService } from '../Session/session-management.service';

const TOKEN_HEADER_KEY = 'Authorization'; // Token header key

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private tokenService: SessionManagementService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();

    if (token) {
      // Clone the request to add the new header.
      const authReq = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY, `Bearer ${token}`)
      });
      // Pass on the cloned request instead of the original request.
      return next.handle(authReq);
    } else {
      // If no token, just pass on the original request.
      return next.handle(req);
    }
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
];
