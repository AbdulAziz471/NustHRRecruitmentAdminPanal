export interface User {
    id?: string;
    sName: string;
    sEmail: string;
    lEmployeeID: string;
    lDirectorateID: string;
    bActive: true;
    roles?: [
      {
      id?: string;
      name: string;
    }];
  }