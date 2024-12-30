import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { authGuard } from './Core/AuthGuard/auth.guard';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';  // Example Dashboard Component
import { UserComponent } from './Pages/users/User.component';
import { RolesComponent } from './Pages/roles/roles.component';
import { PermissionsComponent } from './Pages/permissions/permissions.component';
import {PagesComponent} from './Pages/pages/pages.component'
import { RolePageComponent } from './Pages/RolePages/role-page.component';
import {EmailTemplateComponent} from './Pages/email-template/email-template.component'
import {PendingJobsComponent} from './Pages/Job/pending-jobs/pending-jobs.component'
import {PublishJobsComponent} from './Pages/Job/publish-jobs/publish-jobs.component'
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent 
      },
      {
        path: 'users',
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
      {
        path: 'pages',
        component: PagesComponent 
      },
      {
        path: 'rolePage',
        component: RolePageComponent
      },
      {
        path: 'publishJobs',
        component: PublishJobsComponent
      },
      {
        path: 'pendingJobs',
        component: PendingJobsComponent
      },
      {
        path: 'templates',
        component: EmailTemplateComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];
