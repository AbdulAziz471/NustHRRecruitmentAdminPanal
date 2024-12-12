import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { SessionManagementService } from '../Session/session-management.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private sessionManagement: SessionManagementService,
        private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.sessionManagement.getToken();
        
        const authReq = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${authToken}`,
                'AppKey': environment.App_Key  // Including the App_Key from environment
            }
        });
        return next.handle(authReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.router.navigate(['/login']);
                }
                return throwError(() => new Error('Unauthorized'));
            })
        );;
    }
}