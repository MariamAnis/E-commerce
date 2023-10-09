import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems=new BehaviorSubject(0);
  constructor(private _HttpClient:HttpClient) {}

    

  addProduct(id:any):Observable<any>{
    let token:any= localStorage.getItem('user');
    
   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{"productId":id},{headers:{token:token}})
  }
  getLoggedUserCart():Observable<any>{
    let token:any= localStorage.getItem('user');
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',{headers:{token:token}})

  }
  deleteCartItem(id:any):Observable<any>{
    let token:any= localStorage.getItem('user');
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers:{token:token}})


  }
  updateCartProductQuantity(id:any,count:any):Observable<any>{
    let token:any= localStorage.getItem('user');
   return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count},{headers:{token:token}})

  }

  onlinePayment(cartId:any,shippingAddress:any):Observable<any>{
    let token:any= localStorage.getItem('user');
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{shippingAddress:shippingAddress},{headers:{token:token}})
  }

  clearCart():Observable<any>{
    let token :any= localStorage.getItem('user');
    return this._HttpClient.delete('https://ecommerce.routemisr.com/api/v1/cart',{headers:{token:token}})
  }
  
}
