// import { NgStyle, NgTemplateOutlet } from '@angular/common';
// import { Component, computed, inject, input } from '@angular/core';
// import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { Component, computed, inject, input } from "@angular/core";
import { Router } from "@angular/router";
import { ColorModeService, HeaderComponent } from "@coreui/angular";

// import {
//   AvatarComponent,
//   BadgeComponent,
//   BreadcrumbRouterComponent,
//   ColorModeService,
//   ContainerComponent,
//   DropdownComponent,
//   DropdownDividerDirective,
//   DropdownHeaderDirective,
//   DropdownItemDirective,
//   DropdownMenuDirective,
//   DropdownToggleDirective,
//   HeaderComponent,
//   HeaderNavComponent,
//   HeaderTogglerDirective,
//   NavItemComponent,
//   NavLinkDirective,
//   ProgressBarDirective,
//   ProgressComponent,
//   SidebarToggleDirective,
//   TextColorDirective,
//   ThemeDirective
// } from '@coreui/angular';

// import { IconDirective } from '@coreui/icons-angular';
import { SessionManagementService } from 'src/app/Core/Session/session-management.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  readonly #colorModeService = inject(ColorModeService);
  readonly colorMode = this.#colorModeService.colorMode;

  readonly colorModes = [
    { name: 'light', text: 'Light', icon: 'cilSun' },
    { name: 'dark', text: 'Dark', icon: 'cilMoon' },
    { name: 'auto', text: 'Auto', icon: 'cilContrast' }
  ];

  readonly icons = computed(() => {
    const currentMode = this.colorMode();
    return this.colorModes.find(mode => mode.name === currentMode)?.icon ?? 'cilSun';
  });
  Signout() {
   
    this.sessionManagement.signOut();
    this.router.navigate(['/login']);
  }
  constructor(
    private sessionManagement: SessionManagementService,private router: Router
  ) {
    super();
  }

  sidebarId = input('sidebar1');

}
