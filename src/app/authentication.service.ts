import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';
import {Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogin=new BehaviorSubject(false);


  constructor(private _HTTPClient : HttpClient,private _Router:Router) {
    if(localStorage.getItem('user')!=null){
      
      this.isLogin.next(true);
    }
    else{
      this.isLogin.next(false);

    }
   }
 

register(data:User):Observable<any>{
    return this._HTTPClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data);
  }

  login(data:any):Observable<any>{
    return this._HTTPClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data);
  }
  logout(){
    this._Router.navigate(["/login"]);
    localStorage.removeItem('user');
    this.isLogin.next(false);
    

  }
}
