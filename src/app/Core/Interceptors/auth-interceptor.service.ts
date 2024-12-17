import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SessionManagementService } from '../Session/session-management.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private sessionManagement: SessionManagementService,
        private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.sessionManagement.getToken(); // Get only the token string
        
        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authToken}`, // Set the Authorization header correctly
                AppKey: environment.App_Key  
            }
        });

        return next.handle(authReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.router.navigate(['/login']);
                }
                return throwError(() => new Error('Unauthorized'));
            })
        );
    }
}
