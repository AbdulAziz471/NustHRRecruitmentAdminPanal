
export interface NavItem {
  name: string;
  url: string;
  icon?: string;
  active?: boolean;
  badge?: string;
  children?: NavItem[];
}