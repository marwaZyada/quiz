import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../Services/category.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit{
  id!:string
  category:any
  CategoryForm:FormGroup=new FormGroup({
    "id":new FormControl(null),
    "name":new FormControl(null),
    "description":new FormControl(null),
    "image":new FormControl(null)
      })

      constructor(private _categorySarvice:CategoryService,private _route:ActivatedRoute,private _router:Router){
     
   
      }
      ngOnInit(): void {
        this._route.paramMap.subscribe(data=>{
          console.log(data.get('id'))
         this.id=data.get('id')||""

        })
        this.GetCategory()
    
      
    }

      // get Category
      GetCategory():any{
      
        this._categorySarvice.GetCateegories().subscribe(data=>{
          
          this.category=data.find((el:any)=>el.id==this.id)
        
          this.CategoryForm.get('id')?.setValue(this.category?.id)
        this.CategoryForm.get('name')?.setValue(this.category?.name)
        this.CategoryForm.get('description')?.setValue(this.category?.description)
        this.CategoryForm.get('image')?.setValue(this.category?.image)
     
          })
        }
       // Update categories 
 UpdateItem(data:any){
  this._categorySarvice.UpdateCategory(data.value).subscribe(data=>{
    console.log(data)
this._router.navigate(['/Category'])
  })
 }
}
