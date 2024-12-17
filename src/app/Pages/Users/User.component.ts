

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../../Core/Interfaces/User.interface';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Core/Services/UserService/user.service';
import { RoleService } from '../../Core/Services/RoleService/role.service';
import { Role } from '../../Core/Interfaces/role.interface';
@Component({
  templateUrl: 'User.component.html',
  styleUrls: ['User.component.scss'],
})

export class UserComponent implements OnInit {
  users: User[] = [];
  roles: Role[] = [];
  userForm: FormGroup;
  isEdit: boolean = false;
  constructor(
    private roleService: RoleService,
    private userService: UserService,
    private fb: FormBuilder 
  ) {

    this.userForm = this.fb.group({
      id: [null], 
      sName: ['', Validators.required],
      sEmail: ['', Validators.required],
      lEmployeeID: ['', Validators.required],
      lDirectorateID: ['', Validators.required],
      bActive: [false],
      roles: ['', Validators.required]  
    });
    
  }
  fetchUsers(): void {
    this.userService.GetAllUsersList().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching Users:', error);
      }
    );
  }
  fetchRoles(): void {
    this.roleService.GetAllRolesList().subscribe(
      (data) => {
        this.roles = data;
      },
      (error) => {
        console.error('Error fetching Users:', error);
      }
    );
  }
  ngOnInit(): void {
    this.fetchUsers();
    this.fetchRoles();
  }


  get rolesFormArray(): FormArray {
    return this.userForm.get('roles') as FormArray;
  }
  onSubmit(): void {
    if (!this.userForm.valid) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      return;
    }
    this.isEdit ? this.updateUser() : this.addUser();
  }


  addUser(): void {
    const { id, ...formData } = this.userForm.value;
    const submitData = this.prepareSubmitData(formData);
    this.userService.AddUser(submitData).subscribe({
        next: () => {
            Swal.fire('Success', 'User has been added.', 'success');
            this.afterSave();
        },
        error: (error) => this.handleError('Error adding user', error)
    });
}

prepareSubmitData(formData: any): any {
  const roleID = formData.roles; // This is the single role ID from the form
  const roleObject = this.roles.find(role => role.id === roleID);

  // Create roles array as expected
  const rolesArray = roleObject ? [{
    id: roleObject.id,
    name: roleObject.name
  }] : [];

  // Construct the user object by removing the roles from formData
  const { roles, ...user } = formData;

  return {
    user: user, // All other data belongs to user, excluding roles
    roles: rolesArray // Separate roles array as specified
  };
}

  
  
  
  
  private updateUser(): void {
    this.userService.UpdateUser(this.userForm.value).subscribe({
      next: () => {
        Swal.fire('Success', 'User has been updated.', 'success');
        this.afterSave();
      },
      error: (error) => this.handleError('Error updating user', error)
    });
  }
  


  private afterSave(): void {
    this.fetchUsers();
    this.clearForm();
  }

  clearForm(): void {
    this.userForm.reset();
    this.isEdit = false;
  }

  onEditUser(user: User): void {
    // Reset the form with all user values except for roles
    this.userForm.reset({
      id: user.id,
      sName: user.sName,
      sEmail: user.sEmail,
      lEmployeeID: user.lEmployeeID,
      lDirectorateID: user.lDirectorateID,
      bActive: user.bActive,
      roles: user.roles && user.roles.length > 0 ? user.roles[0].id : ''  
    });

    this.isEdit = true;
}


  
  private handleError(message: string, error: any): void {
    console.error(message, error);
    Swal.fire('Error', message, 'error');
  }
}