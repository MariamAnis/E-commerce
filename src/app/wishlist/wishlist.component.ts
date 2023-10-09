import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { count, forkJoin } from 'rxjs';
import { ProductsApiService } from '../products-api.service';
import { Product } from '../products';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  products:any
  updatedProducts:Product[]=[]

  constructor(private _WishlistService:WishlistService,private _ProductService:ProductsApiService,private _CartService:CartService){

  }
  ngOnInit(): void {
    this._WishlistService.getUserWishlist().subscribe(
      {
        next:(response)=>{this.products=response.data
          console.log(this.products)
        }
      }
    )
  }

  remove(id:any){
    this._WishlistService.removeItem(id).subscribe(
      {
        next:response=>{console.log(response.data)
          
          this.getProducts(response.data);
          this._WishlistService.getUserWishlist()
        }
      }
    )
    
  }

  getProducts(data:any){
    // for(let i =0;i<data.length;i++){
    //   this._ProductService.getSpecificProduct(data[i]).subscribe(
    //     {
    //       next:(response)=>{
    //         this.updatedProducts.push(response.data)
    //         console.log(this.updatedProducts)
    //       }
    //     }
    //   )
    // }
    //this.products=this.updatedProducts
    this._WishlistService.getUserWishlist().subscribe({
      next:res=>this.products=res.data
    })
   
  }

  addToCart(id:any){
    this._CartService.addProduct(id).subscribe({
      next:(response)=>{console.log(response)
        this._CartService.cartItems.next(response.numOfCartItems)
        this.remove(id);
   
      }
    })
  }
 

}
