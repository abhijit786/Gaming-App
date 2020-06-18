import { Injectable } from '@angular/core';
const TOKEN = 'TOKEN';
const USER='USER';

@Injectable({
  providedIn: 'root'
})


export class CustomerService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  setUser(email: string):void{
    localStorage.setItem(USER,email);
  }

  getUser():string{
    return localStorage.getItem(USER);
  }




  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}
