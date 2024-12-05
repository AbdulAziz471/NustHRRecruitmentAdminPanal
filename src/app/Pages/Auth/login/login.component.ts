import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Core/Services/Client/Authentication/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionManagementService } from '../../../../../src/app/Core/Session/session-management.service';
import Swal from 'sweetalert2';
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
  SignINdata: any = {
    email: '',
    password: '',
    RememberMe: false
  };
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  constructor(
    private router: Router,
    private loginService: AuthService,
    private fb: FormBuilder,
    private sessionManagement: SessionManagementService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }
  toggleNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }
  Login(): void {
    if (this.loginForm.invalid) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please enter valid email and password'
        });
        this.router.navigate(['dashboard']);
        return;
    }

    this.isLoading = true;
    this.loginService.signIn(this.loginForm.value).subscribe(
        (response: any) => {
            // Handle successful login
            this.sessionManagement.saveToken(response.accessToken);
            this.sessionManagement.saveUser(response);
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You are being redirected to the dashboard.'
            });
            this.isLoading = false;
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.router.navigate(['dashboard']);

            if (this.loginForm.value.rememberMe) {
                localStorage.setItem('savedUsername', this.loginForm.value.email);
                localStorage.setItem('savedPassword', this.loginForm.value.password);
            } else {
                localStorage.removeItem('savedUsername');
                localStorage.removeItem('savedPassword');
            }
        },
        (error: any) => {
            this.isLoading = false;

            // Specific error for CORS
            if (error.name === 'HttpErrorResponse' && error.status === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Network Error',
                    text: 'Unable to reach the server. This might be due to a network error or CORS policy restrictions.'
                });
                return;
            }

            // Other error handling
            if (error.status === 500) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid API Key',
                    text: 'The provided API key is invalid. Please check your configuration.'
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid email or password'
                });
            }
        }
    );
}
  ngOnInit(): void {
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');

    if (savedUsername && savedPassword) {
      this.loginForm.patchValue({
        email: savedUsername,
        password: savedPassword,
        rememberMe: true
      });
    }
  }
 

}
