import { Component, Input } from '@angular/core';
import { NavItem } from '../../../Core/Interfaces/NavItems.interface';
@Component({
  selector: 'app-default-side-bar',
  templateUrl: './default-side-bar.component.html',
  styleUrl: './default-side-bar.component.scss'
})
export class DefaultSideBarComponent {
  @Input() navItems: NavItem[] = [];
}
