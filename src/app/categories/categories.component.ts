import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../products';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  categories : Category[]=[]
  subCategories:any
  isSub:boolean=false;
  subCategoryName:any;

  constructor(private _CategoriesService:CategoriesService){}
  ngOnInit(): void {
    this._CategoriesService.getAllCaegories().subscribe(
      {
        next:(response)=>{this.categories=response.data
          this.isSub=false
          console.log(console.log(this.categories))
        }
      }
    )
  }


  getSubCategory(id:any,name:any){
    this._CategoriesService.getSubCategoryOfCategory(id,name).subscribe(
      {
        next:(response)=>{this.subCategories=response.data
          this.isSub=true
          this.subCategoryName=name;
          console.log(response);
        }


      }
    )
  }


  
}
