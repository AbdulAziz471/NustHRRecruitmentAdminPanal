import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../Configs/Config';
import { SessionManagementService } from '../../Session/session-management.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(
    private http: HttpClient,
    private config: Config,
    private sessionManagement: SessionManagementService
  ) {}

  // Create Role
  createRole(data: any): Observable<any> {
    return this.http.post(this.config.apiurl + '/Role/Add', data, this.getHttpOptions());
  }

  // Get All Roles
  getRoles(): Observable<any> {
    return this.http.get(this.config.apiurl + 'Role/GetAll', this.getHttpOptions());
  }

  // Get Role by ID
  getRoleById(roleId: string): Observable<any> {
    const options = this.getHttpOptions({ roleId });
    return this.http.get(this.config.apiurl + 'Role/GetById', options);
  }

  // Update Role
  updateRole(roleId: string, data: any): Observable<any> {
    return this.http.put(this.config.apiurl + 'Role/Update' + roleId, data, this.getHttpOptions());
  }

  // Delete Role
  deleteRole(roleId: string): Observable<any> {
    return this.http.delete(this.config.apiurl + 'Role/Delete/' + roleId, this.getHttpOptions());
  }

  // Helper Method to Get HTTP Options with Authorization Headers
  private getHttpOptions(params?: Record<string, string>): { headers: HttpHeaders; params?: HttpParams } {
    const token = this.sessionManagement.getToken();
    if (!token) {
      throw new Error('No token available, user is not authenticated');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const httpParams = params ? new HttpParams({ fromObject: params }) : undefined;

    return { headers, params: httpParams };
  }
}
