import { Component, OnInit } from '@angular/core';
import { OredersService } from '../oreders.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {
  order:any=[]
  constructor(private _OredersService:OredersService,private _CartService:CartService){}
  ngOnInit(): void {

    this._OredersService.getAllOrders(localStorage.getItem('id')).subscribe(
      {
        next:(response)=>{console.log(response)
         this.order=response
        }
      }
    )
  }



}
