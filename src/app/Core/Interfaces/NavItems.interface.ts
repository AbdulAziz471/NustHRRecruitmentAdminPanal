// src/app/core/interfaces/navigation.interface.ts

export interface NavItems {
    id: string;
    title: string;
    description?: string;
    pageUrl?: string | null;  
    preferenceOrder: number;
    subPages?: NavItems[];  
  }
  