import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import jwtDecode from 'jwt-decode';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(private _AuthenticationService:AuthenticationService,private _CartService:CartService){}
  enableNavbar:boolean=false;
  token:any;
  DBToken:any
  username:any
  numberofCartItems:any=0;

  ngOnInit(): void {
   this._AuthenticationService.isLogin.subscribe(
    (val)=>{
      if(localStorage.getItem('user')!= null){
      this._CartService.cartItems.subscribe((val)=> this.numberofCartItems=val);
      this.token=localStorage.getItem('user');
      this.DBToken=jwtDecode(this.token);
      this.username=this.DBToken.name
    
  
      }
      this.enableNavbar=val;
    }
   )
  }
  logout(){
    this._AuthenticationService.logout();
  }

 



}
