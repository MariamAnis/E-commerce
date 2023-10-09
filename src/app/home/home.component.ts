
import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../products-api.service';
import { Category, Product } from '../products';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../wishlist.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchword:string='';
  productList:Product[]=[];
  categoryList:Category[]=[];
  constructor(public _products:ProductsApiService, private _CartService:CartService,private toastr: ToastrService,private _WishlistService:WishlistService){
  }
  ngOnInit(): void {
 this._products.getProducts().subscribe({
  next:(response)=>{this.productList=response.data},
  error:()=>{console.log("Error")}
 }
 
 );
 this._products.getAllCategories().subscribe((categories)=>{this.categoryList=categories.data});
  }
  showSuccess(msg:any) {
    this.toastr.success(msg);
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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      1:{
        items:1
      }
      
    },
    nav: true
  }


}
