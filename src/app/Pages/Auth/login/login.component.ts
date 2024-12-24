import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Core/Services/Authentication/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SessionManagementService } from '../../../../../src/app/Core/Session/session-management.service';
import Swal from 'sweetalert2';
import { LoginResponse } from '../../../Core/Interfaces/LoginResponse.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  showNewPassword = false;
  errorMessage: string = '';
  isLoading: boolean = false;
  isLoginFailed: boolean = false;
  isLoggedIn: boolean = false;
    constructor(
    private router: Router,
    private loginService: AuthService,
    private fb: FormBuilder,
    private sessionManagement: SessionManagementService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required,]],
      password: ['', [Validators.required]],
    });
  }
  Login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); 
      return;
    }
    this.isLoading = true;
    this.loginService.signIn(this.loginForm.value).subscribe(
      (response: LoginResponse) => { 
        this.sessionManagement.saveToken(response.accessToken);
        
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You are being redirected to the dashboard.'
        });
        this.isLoading = false;
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['dashboard']);
      },
      (error: any) => {
        this.isLoading = false;
  
        // Handle specific incorrect username/password error
        if (error.status === 401) {  // Often, 401 Unauthorized is used for login errors
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid username or password. Please try again.'
          });
        } else if (error.name === 'HttpErrorResponse' && error.status === 0) {
          Swal.fire({
            icon: 'error',
            title: 'Network Error',
            text: 'Unable to reach the server. This might be due to a network error or CORS policy restrictions.'
          });
        } else if (error.status === 500) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid API Key',
            text: 'The provided API key is invalid. Please check your configuration.'
          });
        } else {
          // Generic error handling
          Swal.fire({
            icon: 'error',
            title: 'Login Error',
            text: 'An unexpected error occurred. Please try again later.'
          });
        }
      }
    );
  }
  
  toggleNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }
 

  
  ngOnInit(): void {
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');

    if (savedUsername && savedPassword) {
      this.loginForm.patchValue({
        username: savedUsername,
        password: savedPassword,
      });
    }
  }
 

}
