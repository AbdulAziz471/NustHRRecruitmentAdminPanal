import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { authGuard } from './Core/AuthGuard/auth.guard';
import { LoginComponent } from './Pages/auth/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';  // Example Dashboard Component
import { UserComponent } from './Pages/users/User.component';
import { RolesComponent } from './Pages/roles/roles.component';
import { PermissionsComponent } from './Pages/permissions/permissions.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent  // Ensure DashboardComponent is declared in a module
      },
      {
        path: 'User',
        component: UserComponent 
      },
      {
        path: 'roles',
        component: RolesComponent 
      },
      {
        path: 'permissions',
        component: PermissionsComponent 
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent  // Make sure LoginComponent is declared in a module
  },
];
