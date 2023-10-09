import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  constructor(private _CartService:CartService,private _ActivatedRoute:ActivatedRoute){}
  
   shippingForm=new FormGroup({
    details:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required])
    
})

checkout(form:any){
  if(form.valid){
    this._CartService.onlinePayment(this._ActivatedRoute.snapshot.params?.['cartId'],form.value).subscribe(
      {
        next:response=>{console.log(response)
          this.redirectToUrl(response.session.url);
        }

      }
    );
  }
}

redirectToUrl(url:any){
location.href=url;

}
   

}

