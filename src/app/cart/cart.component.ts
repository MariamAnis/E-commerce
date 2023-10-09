import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  products:any;
  totalPrice:any;
  cartId:any;
  cart:boolean=false;
  userId:any;
  constructor(private _CartService:CartService, private _Toastr:ToastrService,private _Router:Router){



  }
  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe(
      {
        next:(response)=>{
          if(response.data.products.length>0){
            this.products=response.data.products
            this.totalPrice=response.data.totalCartPrice
            this._CartService.cartItems.next(response.numOfCartItems)
            this.cartId=response.data._id;
            this.userId=response.data.cartOwner
            localStorage.setItem('id',this.userId)
            this.cart=true
            console.log(this.cart)
            console.log(this.products)
            console.log(response)
            console.log(this.userId)
          }
         
        },
        error:(error)=>{console.log(error)}
      }
    )
  }

  removeItem(id:any){
    this._CartService.deleteCartItem(id).subscribe(
      {
        next:(response)=>{console.log(response)
          this.products=response.data.products
          this._CartService.getLoggedUserCart();
          this._CartService.cartItems.next(response.numOfCartItems)
          this._Toastr.error("Deleted from cart")
          this.totalPrice=response.data.totalCartPrice
        }
        
      }
    )
  }

  updateProductQuantity(id:any,count:any){
    this._CartService.updateCartProductQuantity(id,count).subscribe(
      {
        next:(response)=>{console.log(response)
          console.log(count)
          this.products=response.data.products
        this.totalPrice=response.data.totalCartPrice

        
        
        }
      }
    )
  }
  clearCart(){
    this._CartService.clearCart().subscribe(
      {
        next:(response)=>{console.log(response);
          this._CartService.cartItems.next(0);
        this._Router.navigate(["/home"]);

        },
       
      }
     
    )

  }
 


}
