import { Component, OnInit } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { CategoryService } from '../../Services/category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchbynamePipe } from '../../pipes/searchbyname.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [TitleComponent,CommonModule,FormsModule,SearchbynamePipe,RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  providers:  [ CategoryService ]
})
export class CategoriesComponent implements OnInit{
constructor(private _categorySarvice:CategoryService){

}
Categories:any=[]
search_text:string=""

// get categories 
ngOnInit(): void {
  this._categorySarvice.GetCateegories().subscribe(data=>{
    console.log(data)
    this.Categories=data
  })
}
  // delete categories 
DeleteItem(id:any){
  this._categorySarvice.DeleteCategory(id).subscribe(data=>{
    console.log(data)
    this.Categories=data.filter((el:any)=>el.id!=id)
  })
}

 // Update categories 
 UpdateItem(id:any,data:any){
  this._categorySarvice.UpdateCategory(id,data).subscribe(data=>{
    console.log(data)
  })
}
}


