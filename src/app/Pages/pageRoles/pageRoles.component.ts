import { Component, OnInit } from '@angular/core';
interface IUser {
  name: string;
}

@Component({
  templateUrl: 'pageRoles.component.html',
  styleUrls: ['pageRoles.component.scss'],
})

export class PageRolesComponent implements OnInit {


  public PageRoles: IUser[] = [
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
