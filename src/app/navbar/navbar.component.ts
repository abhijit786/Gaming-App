import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedinuser:string;

  constructor(private custser:CustomerService,private router:Router) { }

  ngOnInit() {
    this.loggedinuser=this.custser.getUser();

  }

  logoff()
  {
    if(this.custser.isLogged())
    {
      localStorage.removeItem('TOKEN');
      localStorage.removeItem('USER');
      this.router.navigate(['/login']);


    }
  }

}
