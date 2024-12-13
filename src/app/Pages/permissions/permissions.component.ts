import { Component, OnInit } from '@angular/core';
import { PermissionService } from '../../../app/Core/Services/PermissionsService/permission.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Permission } from '../../Core/Interfaces/Permission.interface';
@Component({
  templateUrl: 'permissions.component.html',
  styleUrls: ['permissions.component.scss'],
})

export class PermissionsComponent implements OnInit {

  permissions: Permission[] = [];
  permissionForm: FormGroup;
  isEdit: boolean = false;
  constructor(
    private permissionService: PermissionService,
    private fb: FormBuilder 
  ) {


     this.permissionForm = this.fb.group({
      id: [null],
      title: ['', Validators.required]
    }); 
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
  ngOnInit(): void {
    this.fetchPermissions();
  }


   
  onSubmit(): void {
    if (!this.permissionForm.valid) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      return;
    }

    this.isEdit ? this.updateRole() : this.addPermission();
  }

  private addPermission(): void {
    const { id, ...formData } = this.permissionForm.value; // Destructure to exclude 'id'
    this.permissionService.Add(formData).subscribe({
      next: () => {
        Swal.fire('Success', 'Role has been added.', 'success');
        this.afterSave();
      },
      error: (error) => this.handleError('Error adding role', error)
    });
  }
  

  private updateRole(): void {
    this.permissionService.Update(this.permissionForm.value).subscribe({
      next: () => {
        Swal.fire('Success', 'Permission has been updated.', 'success');
        this.afterSave();
      },
      error: (error) => this.handleError('Error updating role', error)
    });
  }

  private afterSave(): void {
    this.fetchPermissions();
    this.clearForm();
  }

  clearForm(): void {
    this.permissionForm.reset();
    this.isEdit = false;
  }

  onEditPermission(permission: Permission): void {
    this.permissionForm.setValue({
      id: permission.id, 
      title: permission.title,
    });
    this.isEdit = true;
  }
  

  private handleError(message: string, error: any): void {
    console.error(message, error);
    Swal.fire('Error', message, 'error');
  }
  


}
