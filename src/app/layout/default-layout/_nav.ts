import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    name: 'User Management ',
    url: '/base',
    iconComponent: { name: 'cil-user-follow' },
    children: [
      {
        name: 'Users',
        url: '/User',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Roles',
        url: '/roles',
         icon: 'nav-icon-bullet'
      },
      {
        name: 'Pages',
        url: '/pages',
         icon: 'nav-icon-bullet'
      },
      {
        name: 'Permissions',
        url: '/permissions',
        // iconComponent: { name: 'cil-speedometer' },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Role Page',
        url: '/RolePage',
        // iconComponent: { name: 'cil-speedometer' },
        icon: 'nav-icon-bullet'
      },
    ]
  },
  
  
];
