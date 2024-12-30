import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'User Management   ',
    url: '/base',
    iconComponent: { name: 'cil-user-follow' },
    children: [
      {
        name: 'users',
        url: 'user',
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
        name: 'Email Template',
        url: '/emailtemplate',
        iconComponent: { name: 'cil-speedometer' },
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
