import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { OffcanvasModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerModule } from '@coreui/angular';
import {PermissionsComponent} from '../app/Pages/permissions/permissions.component'
import {RolePageComponent} from '../app/Pages/RolePages/role-page.component'   
import {PendingJobsComponent } from '../app/Pages/Job/pending-jobs/pending-jobs.component'
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  
} from '@angular/core';
import { getStyle } from '@coreui/utils'
import {  WidgetStatAComponent, TemplateIdDirective, 
}from '@coreui/angular';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import {
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarTogglerDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { DOCUMENT, NgStyle } from '@angular/common';
import { Component, DestroyRef, effect, inject, OnInit, Renderer2, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChartOptions } from 'chart.js';
import { routes } from './app.routes';
import { CardModule, GridModule } from '@coreui/angular';
import {
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckLabelDirective,
  GutterDirective,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,
  TextColorDirective
} from '@coreui/angular';
import {AppComponent } from "./app.component"
import {ValidationStyleDirective } from "../app/Core/Directives/validation-style.directive"
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { ContainerComponent, CardGroupComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective } from '@coreui/angular';
import {LoginComponent} from './Pages/Auth/login/login.component'
import { Router, RouterModule } from '@angular/router';
import { Config } from './Core/Configs/Config';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './Core/Services/Authentication/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './layout';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SidebarModule } from '@coreui/angular';
import {
  
  BadgeComponent,
  BreadcrumbRouterComponent,

  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  SidebarToggleDirective,
  ThemeDirective,
  BreadcrumbComponent, BreadcrumbItemComponent
} from '@coreui/angular';
import {UserComponent} from './Pages/users/User.component'
import {RolesComponent} from './Pages/roles/roles.component'
import { AuthInterceptor } from './Core/Interceptors/auth-interceptor.service';
import { PagesComponent } from './Pages/pages/pages.component';
import { PublishJobsComponent } from './Pages/Job/publish-jobs/publish-jobs.component';
import {EmailTemplateComponent} from './Pages/email-template/email-template.component'
import {ApplicantsComponent} from './Pages/applicants/applicants.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent ,
    ValidationStyleDirective,
    DashboardComponent,
    DefaultLayoutComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    UserComponent,
    RolesComponent,
    PermissionsComponent,
    PagesComponent,
    RolePageComponent,
    PendingJobsComponent,
    PublishJobsComponent,
    EmailTemplateComponent,
    ApplicantsComponent
 ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    OffcanvasModule,SpinnerModule,
    ReactiveFormsModule,
    IconModule,
    SidebarModule,
    NgScrollbar,
    RouterLink, 
    AngularEditorModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    BadgeComponent,
    ShadowOnScrollDirective,
    SidebarBrandComponent,
    SidebarComponent,
    SidebarFooterComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    SidebarTogglerDirective,
    BreadcrumbRouterComponent,
    DropdownComponent,
    DropdownDividerDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    HeaderComponent,
    HeaderNavComponent,
    HeaderTogglerDirective,
    NavItemComponent,
    NavLinkDirective,
    SidebarToggleDirective,
    BreadcrumbComponent, BreadcrumbItemComponent,
    ThemeDirective,
    GridModule,
    HttpClientModule,
    CommonModule,CardModule,BrowserModule,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    TextColorDirective,ContainerComponent,CardGroupComponent , FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective ,CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, CardHeaderComponent, TableDirective, AvatarComponent
  ],
  providers: [
    IconSetService,
    Config,
    AuthService,
    IconSetService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
   ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
