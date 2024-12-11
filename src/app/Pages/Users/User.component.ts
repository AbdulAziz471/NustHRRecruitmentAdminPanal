

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../../Core/Interfaces/User.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Core/Services/UserService/user.service';
import { RoleService } from '../../Core/Services/RoleService/role.service';
import { Role } from '../../Core/Interfaces/role.interface';
@Component({
  templateUrl: 'User.component.html',
  styleUrls: ['User.component.scss'],
})

export class UserComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;
  isEdit: boolean = false;
  constructor(
    // private roleService: RoleService,
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
  ngOnInit(): void {
    this.fetchUsers();
  }


  
  onSubmit(): void {
    if (!this.userForm.valid) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      return;
    }

    this.isEdit ? this.updateUser() : this.addUser();
  }

  private addUser(): void {
    const { id, ...formData } = this.userForm.value;
    this.userService.AddUser(formData).subscribe({
      next: () => {
        Swal.fire('Success', 'User has been added.', 'success');
        this.afterSave();
      },
      error: (error) => this.handleError('Error adding user', error)
    });
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
    this.userForm.setValue({
      id: user.id, // Ensure this is part of your form group
      sName: user.sName,
      sEmail: user.sEmail,
      lEmployeeID: user.lEmployeeID,
      lDirectorateID: user.lDirectorateID,
      bActive: user.bActive
    });
    this.isEdit = true;
  }
  
  private handleError(message: string, error: any): void {
    console.error(message, error);
    Swal.fire('Error', message, 'error');
  }
}