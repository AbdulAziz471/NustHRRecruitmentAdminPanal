import { SessionManagementService } from '../../Core/Session/session-management.service';
import {AdminService} from "../../Core/Services/Admin/admin.service"
import { navItems } from './_nav';
import { Component } from "@angular/core";
import { NavItem } from '../../Core/Interfaces/NavItems.interface';
function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public navItems2 = navItems;
  constructor(
    private adminService: AdminService,
    private sessionService: SessionManagementService 
  ) {}

  ngOnInit() {
    console.log("ngOnInit called");
    this.loadUserNavItems();
  }
  

  loadUserNavItems() {
  const userId = this.sessionService.getUserId();
  console.log("Attempting to load nav items for UserID:", userId);
  if (userId) {
    this.adminService.getUserPagesById(userId).subscribe({
      next: (data) => {
        this.navItems2 = data;
        console.log("Navigation data loaded:", this.navItems2);
      },
      error: (error) => {
        console.error('Error loading user nav items:', error);
        console.error('Error details:', error.message);
      }
    });
  } else {
    console.error('No user ID found in session.');
  }
}

myNavItems: NavItem[] = [
  { name: 'Dashboard', url: '/', icon: 'cil-speedometer', active: true },
  { name: 'With badge', url: '/badge', icon: 'cil-star', badge: 'NEW' },
  {
    name: 'Nav dropdown', url: '#', icon: 'cil-folder-open', children: [
      { name: 'Nav dropdown item', url: '/sub1' },
      { name: 'Nav dropdown item', url: '/sub2' }
    ]
  }
];

  onScrollbarUpdate($event: any) {
  }
}
