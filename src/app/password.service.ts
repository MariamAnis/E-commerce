import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private _HttpClient:HttpClient) { }


  forgetPassword(form:any):Observable<any>{
   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',form)
  }
  verifyPassword(form:any):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',form)
  }
 resetPassword(form:any):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',form)
    
  }
}
