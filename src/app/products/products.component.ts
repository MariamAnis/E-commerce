import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../products-api.service';
import { Product } from '../products';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../wishlist.service';
import { ɵafterNextNavigation } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[]
  searchword:string=''
  isWish=false
  color:any="color:red";
  xcolor:any
  constructor(private _ProductService:ProductsApiService,private _CartService:CartService,private toastr: ToastrService,private _WishlistService:WishlistService){}
  ngOnInit(): void {
    this._ProductService.getProducts().subscribe(
      {
        next:(response)=>{
          this.products=response.data
          console.log(this.products)
        }
      }
    )
  }

  addProduct(id:any){
    this._CartService.addProduct(id).subscribe(
      {
        next : (response)=>{
          this.showSuccess(response.message);
          console.log(response);
          this._CartService.cartItems.next(response.numOfCartItems);
        }
      }
    );

  }

  showSuccess(msg:any) {
    this.toastr.success(msg);
  }

  addProductToWishlist(id:any,event:any){
    this._WishlistService.addProductToWishlist(id).subscribe(
      {
        next:(response)=>{this.showSuccess(response.message)
          console.log(event)
          this.changeColor(event)
        }
      }
    )
      
    

  }

  changeColor(event:any){
   event.target.classList.add('text-danger')
    
  }

}
