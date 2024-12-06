import { Component, OnInit } from '@angular/core';
interface IUser {
  name: string;
}

@Component({
  templateUrl: 'roles.component.html',
  styleUrls: ['roles.component.scss'],
})

export class RolesComponent implements OnInit {


  public users: IUser[] = [
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
  }

  


}
