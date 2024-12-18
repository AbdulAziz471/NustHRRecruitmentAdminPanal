import { SessionManagementService } from '../../Core/Session/session-management.service';
import {AdminService} from "../../Core/Services/Admin/admin.service"
import { Component } from "@angular/core";
import { navItems } from './_nav';
import {SideBarNav} from "../../Core/Interfaces/SideBarNav.interface"
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
  // public navItems = navItems;
  sidebarNav: SideBarNav[] = [];
  activeItemId: string | null = null;
  constructor(
    private adminService: AdminService,
    private sessionService: SessionManagementService 
  ) {}

  ngOnInit() {
    this.loadUserNavItems();
  }
  

  loadUserNavItems(): void {
    const userId = this.sessionService.getUserId();
    if (userId) {
      this.adminService.getUserPagesById(userId).subscribe({
        next: (data: SideBarNav[]) => {
          this.sidebarNav = data;
        },
        error: (error) => console.error('Error loading user nav items:', error)
      });
    } else {
      console.error('No user ID found in session.');
    }
  }

  toggleChildrenVisibility(itemId: string): void {
    this.activeItemId = this.activeItemId === itemId ? null : itemId;  // Toggle visibility
  }
  onScrollbarUpdate($event: any) {
  }
}
