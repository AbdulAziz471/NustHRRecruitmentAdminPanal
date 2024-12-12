import { Component } from '@angular/core';
import { Page } from '../../Core/Interfaces/Page.interface';
import { Permission } from '../../Core/Interfaces/Permission.interface';
import { PermisssionService } from '../../../app/Core/Services/PermissionsService/permission.service';
import { PageService } from '../../Core/Services/PageService/page.service';
import { FormBuilder } from '@angular/forms';
import { RoleService } from '../../Core/Services/RoleService/role.service';
import { Role } from '../../Core/Interfaces/role.interface';
import {RolePageService} from '../../Core/Services/RolePageService/role-page.service'
@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styleUrl: './role-page.component.scss'
})
export class RolePageComponent {

pages: Page[] = [];
permissions: Permission[] = [];

 roles: Role[] = [];
 constructor(
    private pageService: PageService,
    private permissionService: PermisssionService,
    private rolePageService: RolePageService,
    private roleService: RoleService, 
    private fb: FormBuilder 
  ) {      
    }

    ngOnInit(): void {
      this.fetchRoles();
      this.fetchPages();
      this.fetchPermissions();
    }
    
    fetchRoles(): void {
      this.roleService.GetAllRolesList().subscribe(
        (data) => {
          this.roles = data;
        },
        (error) => {
          console.error('Error fetching Roles:', error);
        }
      );
    }
   
    fetchPermissions(): void {
      this.permissionService.GetAllList().subscribe(
        (data) => {
          this.permissions = data;
        },
        (error) => {
          console.error('Error fetching permissions:', error);
        }
      );
    }
    fetchPages(): void {
      this.pageService.GetAllPages().subscribe({
        next: (data: Page[]) => { 
          this.pages = data.filter((page: Page) => !!page.pageUrl); // Explicitly typing 'page'
        },
        error: (error) => {
          console.error('Error fetching Pages:', error);
        }
      });
    }
    onRoleChange(event: Event): void {
      const selectElement = event.target as HTMLSelectElement; // Cast the target to HTMLSelectElement
      const roleId = selectElement.value; 
      if (!roleId) return; // Check if the roleId is truthy, exit if not
    
      this.rolePageService.GetRolePermissionById(roleId).subscribe(
        data => {
          console.log('Role details fetched:', data);
        },
        error => {
          console.error('Error fetching rolePage details:', error);
        }
      );
    }
    
    
    
  }
