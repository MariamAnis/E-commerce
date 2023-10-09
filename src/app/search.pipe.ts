import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:Product[],searchword:string): Product[]{
    return  products.filter((product)=>{return product.title.toLowerCase().includes(searchword)})
   

  }

}
