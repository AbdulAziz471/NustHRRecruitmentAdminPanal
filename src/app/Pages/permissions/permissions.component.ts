import { Component, OnInit } from '@angular/core';
import { PermissionsService } from 'src/app/Core/Services/Permissions/permissions.service';
interface IPermission {
  name: string;
}

@Component({
  templateUrl: 'permissions.component.html',
  styleUrls: ['permissions.component.scss'],
})

export class PermissionsComponent implements OnInit {


  constructor(private permissionService: PermissionsService) {}
  permission: any[] = [];
  fetchPermissions(): void {
    this.permissionService.getPermissions().subscribe(
      (data) => {
        this.permissions = data;
      },
      (error) => {
        console.error('Error fetching permissions:', error);
      }
    );
  }
  public permissions: IPermission[] = [
    {
      name: 'Super Admin',
    },
    {
      name: 'Admin',
    },
    
    {
      name: 'Develpper ',
    },
    {
      name: 'UI& UX Designer',
    },
  ];


  ngOnInit(): void {
    this.fetchPermissions();
  }

  


}
