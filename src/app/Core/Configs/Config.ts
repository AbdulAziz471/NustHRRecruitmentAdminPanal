import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
@Injectable({
     providedIn: 'root' 
   })
export class Config {
     apiurl= environment.API_URL;
     apikey= environment.App_Key;
     baseUrl= environment.Image_URL;
}
