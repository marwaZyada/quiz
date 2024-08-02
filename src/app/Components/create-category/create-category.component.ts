import { Component } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {
  CategoryForm:FormGroup=new FormGroup({
"name":new FormControl(null),
"description":new FormControl(null),
"image":new FormControl(null)
  })
constructor(private _categoryService:CategoryService){

}
Add(form1:any){
  console.log(form1)
 

  this._categoryService.AddCategory(form1.value).subscribe(
    {next:(res)=>console.log(res)
  })

}
}
