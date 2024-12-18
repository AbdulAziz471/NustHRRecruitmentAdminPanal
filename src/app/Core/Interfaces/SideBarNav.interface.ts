export interface SideBarNav {
  id: string;
  title: string;
  description?: string;
  pageUrl?: string;
  parentPageId?: string;
  createdBy?: string;
  createdOn?: string;
  preferenceOrder?: number;
  subPages?: SideBarNav[];
}
