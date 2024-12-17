import { SessionManagementService } from '../../Core/Session/session-management.service';
import {AdminService} from "../../Core/Services/Admin/admin.service"
import { navItems } from './_nav';
import { Component } from "@angular/core";
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
        this.navItems = data;
        console.log("Navigation data loaded:", data);
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


  onScrollbarUpdate($event: any) {
  }
}
