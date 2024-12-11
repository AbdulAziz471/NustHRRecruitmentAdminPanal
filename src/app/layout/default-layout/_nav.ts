import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Users',
    url: '/User',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Roles',
    url: '/roles',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Pages',
    url: '/pages',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Permissions',
    url: '/permissions',
    iconComponent: { name: 'cil-speedometer' },
  },
  
];
