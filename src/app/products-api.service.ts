import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(public _HttpClient: HttpClient) {}
  getProducts(): Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  getAllCategories():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')

  }
  getSpecificProduct(id:any):Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products/'+id)

  }

  
}
