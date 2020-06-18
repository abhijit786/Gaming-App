import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  login:string="2fe3a6c55ba464aced166eb2275bc9f2";
  authtoken:string="bbbd58bb2a940c6572dfa4357fe0664e";

  constructor(private apiser:ApiService) { }

  getitems():Observable<any>{
    return this.apiser.getitemsapi(this.login,this.authtoken);
  
  }
}
