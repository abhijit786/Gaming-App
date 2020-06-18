import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email = 'eve.holt@reqres.in';
  password = 'cityslicka';

  constructor(private api: ApiService, private customer: CustomerService, private router: Router,private titleser:Title) {
  }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        
        resp => {
          if (resp.token) {
            this.customer.setToken(resp.token);
            this.customer.setUser(this.email);
            this.router.navigate(['/dashboard']);
          }else
          {
            alert('some invalid response received executing the API Repsonse')
          }
        },
        er => {
          if(er.error.error!=undefined){
          alert(er.error.error);
          }
        });
  }

  ngOnInit() {
    this.titleser.setTitle("Login - Ultimate Gaming Partner App");

  }

}
