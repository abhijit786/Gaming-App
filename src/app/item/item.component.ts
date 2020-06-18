import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items:any;
  constructor(private itemser:ItemService) { }

  ngOnInit() {
    this.getitems();
  }

  getitems(){
    this.itemser.getitems()
    .subscribe(
      resp=>{
        console.log(resp);
        this.items=resp;


      },
      err=>{

      }
    )
  }
}
