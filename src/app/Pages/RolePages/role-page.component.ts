
import { Component } from '@angular/core';
import { PermissionService } from '../../../app/Core/Services/PermissionsService/permission.service';
import { PageService } from '../../Core/Services/PageService/page.service';
import { RoleService } from '../../Core/Services/RoleService/role.service';
import { Role } from '../../Core/Interfaces/role.interface';
import { RolePageService } from '../../Core/Services/RolePageService/role-page.service'
import Swal from 'sweetalert2';

interface Page {
  id: string;
  title: string;
  pageUrl: string;
}

interface Permission {
  id: string;
  title: string;
}
@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styleUrl: './role-page.component.scss'
})
export class RolePageComponent {

  pages: Page[] = [];
  permissions: Permission[] = [];
  selectedRoleId: string | null = null;
  permissionsState: { [pageId: string]: { [permissionId: string]: boolean } } = {};
  roles: Role[] = [];
  isLoading: boolean = false;
  constructor(private roleService: RoleService,
    private permissionService: PermissionService,
    private pageService: PageService,
    private rolePageService: RolePageService) {
    this.fetchRoles();
    this.fetchPermissions();
    this.fetchPages();
  }

  fetchRoles(): void {
    this.roleService.GetAllRolesList().subscribe(data => {
      this.roles = data;
    }, error => {
      console.error('Error fetching Roles:', error);
    });
  }

  fetchPermissions(): void {
    this.permissionService.GetAllList().subscribe(data => {
      this.permissions = data;
    }, error => {
      console.error('Error fetching permissions:', error);
    });
  }

  fetchPages(): void {
    this.pageService.GetAllPages().subscribe({
      next: (data: any[]) => {
        this.pages = data.filter(page => page.pageUrl);
        this.initializePermissionsState();
      },
      error: (error) => {
        console.error('Error fetching Pages:', error);
      }
    });
  }

  initializePermissionsState() {
    this.permissionsState = {}; // Reset the state
    this.pages.forEach((page: any) => {
      this.permissionsState[page.id] = {};
      this.permissions.forEach((permission: any) => {
        this.permissionsState[page.id][permission.id] = false; // Default to unchecked
      });
    });
  }


  onRoleChange(event: Event): void {
    this.isLoading = true;
    const selectElement = event.target as HTMLSelectElement;
    this.selectedRoleId = selectElement.value;

    if (!this.selectedRoleId) return;
    this.rolePageService.GetRolePermissionById(this.selectedRoleId).subscribe({
      
      next: (data) => {
        this.initializePermissionsState();
        this.isLoading = false;
        data.forEach((rolePermission: any) => {
          const pageId = rolePermission.pageId;
          const permissions = rolePermission.permission;

          if (this.permissionsState[pageId]) {
            permissions.forEach((permissionId: string) => {
              if (this.permissionsState[pageId][permissionId] !== undefined) {
                this.permissionsState[pageId][permissionId] = true; // Set to true if permission exists
              }
            });
          }
        });
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error fetching rolePage details:', error);
      }
    });
  }


  togglePermission(pageId: string, permissionId: string, event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Cast to HTMLInputElement
    if (this.permissionsState[pageId]) {
      this.permissionsState[pageId][permissionId] = inputElement.checked; // Access 'checked' property
    }
  }



  savePermissions(): void {
    interface PermissionDetail {
      roleId: string | null;
      pageId: string;
      permissionId: string;
    }

    if (!this.selectedRoleId) {
      Swal.fire('Warning', 'Please select a role before saving.', 'warning');
      return;
    }
    const permissionsArray: PermissionDetail[] = [];
    Object.keys(this.permissionsState).forEach(pageId => {
      Object.keys(this.permissionsState[pageId]).forEach(permissionId => {
        if (this.permissionsState[pageId][permissionId]) {
          permissionsArray.push({
            roleId: this.selectedRoleId,
            pageId: pageId,
            permissionId: permissionId
          });
        }
      });
    });

    if (permissionsArray.length > 0 && this.selectedRoleId) {
      this.rolePageService.UpdateRolePermission(permissionsArray).subscribe({
        next: (response) => {
          Swal.fire('Success', 'Permissions has been updated.', 'success');
        },
        error: (error) => {
          console.error('Error updating permissions:', error);
          // Optionally, show an error message to the user
        }
      });
    } else {
      console.warn('No permissions selected or role not selected');
    }
  }

  isAllPermissionsActiveForPage(pageId: string): boolean {
    return Object.values(this.permissionsState[pageId]).every((isChecked) => isChecked);
  }
  toggleAllPermissionsForPage(pageId: string, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked;

    if (this.permissionsState[pageId]) {
      Object.keys(this.permissionsState[pageId]).forEach((permissionId) => {
        this.permissionsState[pageId][permissionId] = isChecked; // Set all permissions for the page
      });
    }
  }


}
