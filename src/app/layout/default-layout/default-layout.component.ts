import { SessionManagementService } from '../../Core/Session/session-management.service';
import {AdminService} from "../../Core/Services/Admin/admin.service"
import { Component } from "@angular/core";
import { navItems } from './_nav';
import { INavData } from '@coreui/angular';
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
  // navItems: INavData[] = []; 
  public navItems = navItems;
  constructor(
    private adminService: AdminService,
    private sessionService: SessionManagementService 
  ) {}

  ngOnInit() {
    console.log("ngOnInit called");
    // this.loadUserNavItems();
  }
  

  
// loadUserNavItems() {
//   const userId = this.sessionService.getUserId();
//   if (userId) {
//       this.adminService.getUserPagesById(userId).subscribe({
//           next: (data: NavItem[]) => {  // Assuming your API data directly matches the NavItem[] structure
//               this.navItems = data.map((item: NavItem) => ({
//                   id: item.id,
//                   title: item.title,
//                   description: item.description,
//                   pageUrl: item.pageUrl,
//                   parentPageId: item.parentPageId,
//                   createdBy: item.createdBy,
//                   createdOn: item.createdOn,
//                   preferenceOrder: item.preferenceOrder,
//                   subPages: item.subPages ? item.subPages.map((subItem: NavItem) => ({
//                       id: subItem.id,
//                       title: subItem.title,
//                       description: subItem.description,
//                       pageUrl: subItem.pageUrl,
//                       parentPageId: subItem.parentPageId,
//                       createdBy: subItem.createdBy,
//                       createdOn: subItem.createdOn,
//                       preferenceOrder: subItem.preferenceOrder,
//                       subPages: subItem.subPages  // Further nesting, apply similar mapping if needed
//                   })) : []
//               }));
//               console.log("Transformed Navigation data:", this.navItems);
//           },
//           error: (error) => console.error('Error loading user nav items:', error)
//       });
//   } else {
//       console.error('No user ID found in session.');
//   }
// }

  
  onScrollbarUpdate($event: any) {
  }
}
