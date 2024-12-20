import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../Core/Services/RoleService/role.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Role } from '../../Core/Interfaces/role.interface';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];
  roleForm: FormGroup;
  isEdit: boolean = false;
  isLoading: boolean = false;
  constructor(
    private roleService: RoleService,
    private fb: FormBuilder 
  ) {

     this.roleForm = this.fb.group({
      id: [null],
      name: ['', Validators.required]
    });
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
  ngOnInit(): void {
    this.fetchRoles();
  }


  
  onSubmit(): void {
    if (!this.roleForm.valid) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      return;
    }

    this.isEdit ? this.updateRole() : this.addRole();
  }

  private addRole(): void {
    this.isLoading = true;
    const { id, ...formData } = this.roleForm.value; // Destructure to exclude 'id'
    this.roleService.AddRole(formData).subscribe({ // Send formData without 'id'
      next: () => {
        this.isLoading = false;
        Swal.fire('Success', 'Role has been added.', 'success');
        this.afterSave();
      },
      error: (error) => {
        this.isLoading = false;
        this.handleError('Error adding role', error)}
    });
  }
  

  private updateRole(): void {
    this.isLoading = true;
    this.roleService.UpdateRole(this.roleForm.value).subscribe({
      next: () => {
        this.isLoading = false;
        Swal.fire('Success', 'Role has been updated.', 'success');
        this.afterSave();
      },
      error: (error) => {
        this.isLoading = false;
        this.handleError('Error updating role', error)}
    });
  }

  private afterSave(): void {
    this.fetchRoles();
    this.clearForm();
  }

  clearForm(): void {
    this.roleForm.reset();
    this.isEdit = false;
  }

  onEditRole(role: Role): void {
    this.roleForm.setValue({
      id: role.id, // Ensure this is part of your form group
      name: role.name,
    });
    this.isEdit = true;
  }
  

  private handleError(message: string, error: any): void {
    console.error(message, error);
    Swal.fire('Error', message, 'error');
  }
  


}
