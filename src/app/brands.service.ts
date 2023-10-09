import { Brand } from './products';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {


  constructor(private _HttpClient:HttpClient) { }
 


  getAllBrand():Observable<any> {
   return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
  }




}
