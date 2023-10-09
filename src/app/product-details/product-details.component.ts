import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../products-api.service';
import { Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails:any;
constructor(private _ProductsApiService:ProductsApiService,private _ActivatedRoute:ActivatedRoute,private _CartService:CartService){}
  ngOnInit(): void {
    let id = this._ActivatedRoute.snapshot.params?.['productId'];
  this._ProductsApiService.getSpecificProduct(id).subscribe((product)=>this.productDetails=product.data)
 console.log(this.productDetails);
console.log();
  }

  addProduct(id:any){
    this._CartService.addProduct(id).subscribe({
      next:(response)=>{console.log(response)
        this._CartService.cartItems.next(this._CartService.cartItems.getValue()+1)
      }
    })
  }



}
