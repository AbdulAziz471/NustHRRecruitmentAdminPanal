export interface Page {
  id?: string; 
  title: string;
  pageUrl?: string;
  parentPageId?: string;
  preferenceOrder: string;
  description: string;
}