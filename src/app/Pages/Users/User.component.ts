

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionManagementService } from '../../Core/Session/session-management.service';
// import { UsersService } from '../../Core/Services/UserService/users.service';
@Component({
  templateUrl: 'User.component.html',
  styleUrls: ['User.component.scss'],
})

export class UserComponent implements OnInit {
  constructor(
    private sessionManagement: SessionManagementService, 
    // private usersService: UsersService,
    private route: ActivatedRoute, 
    private router: Router, 
  ) { 
  
  } 
  UserList: any = [];

  form: any = {
    sName : '',
    sEmail : '',
    lEmployeeID : '',
    lDirectorateID : '',
    bActive : true,
  }
  ngOnInit(): void {
    // this.GetUserList();
  }
//   ClearForm(f: any): void {
  
//     delete this.form.lAwardId; 
//     f.resetForm(); 
// }
  
// AddUser(f: any): void {
//   this.usersService.createUser(this.form)
//     .subscribe(
//         {
//           next: (response: any) => {
            
//             if (response.id == 1) {
          
//               Swal.fire('Created!', 'New record has been deleted.', 'success');
//               // this.toastr.success("Your record has been successfully added!","Successfully!!" );
//               this.ClearForm(f);
//             }
//           },
//           error: (error: any) => {
//             console.error("Error occurred:", error);
//           },
//           complete: () => {
//             console.log("Request completed.");
            
//           }
//      }
//     )
// }
// GetUserList(): void {

//   this.usersService.getUsers()
//    .subscribe(
//      (response: any) => {
//        this.UserList=response;
//      }
//    ) 
// }

}
