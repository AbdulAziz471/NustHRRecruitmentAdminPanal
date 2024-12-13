
import { Component } from '@angular/core';
// import { Page } from '../../Core/Interfaces/Page.interface';
// import { Permission } from '../../Core/Interfaces/Permission.interface';
import { PermisssionService } from '../../../app/Core/Services/PermissionsService/permission.service';
import { PageService } from '../../Core/Services/PageService/page.service';
import { FormBuilder } from '@angular/forms';
import { RoleService } from '../../Core/Services/RoleService/role.service';
import { Role } from '../../Core/Interfaces/role.interface';
import {RolePageService} from '../../Core/Services/RolePageService/role-page.service'
import Swal from 'sweetalert2';

interface Page {
  id: string; // Ensuring id is always a string and not undefined
  title: string;
  pageUrl: string;
}

interface Permission {
  id: string; // Ensuring id is always a string and not undefined
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
 constructor(private roleService: RoleService, 
  private permissionService: PermisssionService, private pageService: PageService, private rolePageService: RolePageService) {
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
  this.pages.forEach(page => {
    this.permissionsState[page.id] = {};
    this.permissions.forEach(permission => {
      this.permissionsState[page.id][permission.id] = false; // Initialize all permissions as false
    });
  });
}

onRoleChange(event: Event): void {
  const selectElement = event.target as HTMLSelectElement;
  this.selectedRoleId = selectElement.value;
    // const roleId = this.selectedRoleId 
  if (!this.selectedRoleId) return; 
    
  this.rolePageService.GetRolePermissionById(this.selectedRoleId).subscribe(
    data => {
      console.log('Role details fetched:', data);
    },
    error => {
      console.error('Error fetching rolePage details:', error);
    }
  );
}

togglePermission(pageId: string, permissionId: string, event: Event): void {
  const element = event.target as HTMLInputElement | null; 
  if (!element) return; 
  const isChecked = element.checked;
  if (this.permissionsState[pageId]) {
    this.permissionsState[pageId][permissionId] = isChecked;
  }
}


savePermissions(): void {
  interface PermissionDetail {
    roleId: string | null; 
    pageId: string;
    permissionId: string;
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
    // Call the API to update role permissions
    this.rolePageService.UpdateRolePermission(permissionsArray).subscribe({
      next: (response) => {
 Swal.fire('Success', 'Permissions has been updated.', 'success');
        console.log('Permissions updated successfully:', response);
        // Optionally, show a success message to the user
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



}
