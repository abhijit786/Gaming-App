import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser'
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(private custser:CustomerService,private router:Router,private titleser:Title) { }

  ngOnInit() {
    this.titleser.setTitle("Dashboard - Ultimate Gaming Partner App");

  }

 
}
