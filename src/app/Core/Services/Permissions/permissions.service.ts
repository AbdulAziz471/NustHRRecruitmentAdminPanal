import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../Configs/Config';
import { SessionManagementService } from '../../Session/session-management.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(
    private http: HttpClient,
    private config: Config,
    private sessionManagement: SessionManagementService
  ) {}

    // Create Permission
    createPermission(data: any): Observable<any> {
      return this.http.post(this.config.apiurl + 'Permission/Create', data, this.getHttpOptions());
    }
  
    // Get All Permissions
    getPermissions(): Observable<any> {
      return this.http.get(this.config.apiurl + 'Permission/GetAll', this.getHttpOptions());
    }
  
    // Get Permission by ID
    getPermissionById(permissionId: string): Observable<any> {
      const options = this.getHttpOptions({ permissionId });
      return this.http.get(this.config.apiurl + 'Permission/GetById', options);
    }
  
    // Update Permission
    updatePermission(permissionId: string, data: any): Observable<any> {
      return this.http.put(this.config.apiurl + 'Permission/Update/' + permissionId, data, this.getHttpOptions());
    }
  
    // Delete Permission
    deletePermission(permissionId: string): Observable<any> {
      return this.http.delete(this.config.apiurl + 'Permission/Delete/' + permissionId, this.getHttpOptions());
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
