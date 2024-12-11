import { Component, OnInit } from '@angular/core';
import { PermisssionService } from '../../../app/Core/Services/PermissionsService/permission.service';
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
    private permissionService: PermisssionService,
    private fb: FormBuilder 
  ) {

     // Initialize the form in the constructor
     this.permissionForm = this.fb.group({
      id: [null],
      name: ['', Validators.required]
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

    this.isEdit ? this.updatePermission() : this.addRole();
  }

  private addRole(): void {
    this.permissionService.Add(this.permissionForm.value).subscribe({
      next: () => {
        Swal.fire('Success', 'Role has been added.', 'success');
        this.afterSave();
      },
      error: (error) => this.handleError('Error adding role', error)
    });
  }

  private updatePermission(): void {
    this.permissionService.Update(this.permissionForm.value).subscribe({
      next: () => {
        Swal.fire('Success', 'Role has been updated.', 'success');
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
    this.permissionForm.setValue({ id: permission.id, name: permission.title });
    this.isEdit = true;
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
    Swal.fire('Error', message, 'error');
  }
  


}
