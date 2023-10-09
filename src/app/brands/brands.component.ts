import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { Brand } from '../products';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
  brands:Brand[]=[];
  constructor(private BrandsService:BrandsService){}
  ngOnInit(): void {
    this.BrandsService.getAllBrand().subscribe(
      {
        next:(response)=>{this.brands=response.data
          console.log(this.brands)
        }
        
      }
    )

  }


 

}
