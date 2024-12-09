import { Component, OnInit } from '@angular/core';
// import { PermissionsService } from '../../Core/Services/Permissions/permissions.service';
interface IPermission {
  name: string;
}

@Component({
  templateUrl: 'permissions.component.html',
  styleUrls: ['permissions.component.scss'],
})

export class PermissionsComponent implements OnInit {

  permissions: any = [];
  constructor(
    // private permissionService: PermissionsService
  ) {}
  permission: any[] = [];
  // fetchPermissions(): void {
  //   this.permissionService.getPermissions().subscribe(
  //     (data) => {
  //       this.permissions = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching permissions:', error);
  //     }
  //   );
  // }
  ngOnInit(): void {
    // this.fetchPermissions();
  }

  


}
