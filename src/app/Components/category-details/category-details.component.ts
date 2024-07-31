import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent  implements OnInit{
  id!:any
  category:any
constructor(private _route:ActivatedRoute,private _categoryService:CategoryService){

}
ngOnInit(): void {
  this._route.paramMap.subscribe(data=>{
console.log(data.get('id'))
this.id=data.get('id')
this._categoryService.GetCateegories().subscribe(data=>{console.log(data)

  this.category=data.find((el:any)=>el.id==this.id)
  console.log(this.category)
})
  })
}
}
