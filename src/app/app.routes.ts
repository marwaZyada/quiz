import { Routes } from '@angular/router';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ProductsComponent } from './Components/products/products.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { UserComponent } from './Components/user/user.component';
import { CategoryDetailsComponent } from './Components/category-details/category-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CreateCategoryComponent } from './Components/create-category/create-category.component';
import { UpdateCategoryComponent } from './Components/update-category/update-category.component';

export const routes: Routes = [
    {path:"",redirectTo:"User",pathMatch:'full'},
    {path:"Category",component:CategoriesComponent,title:"Category"},
    {path:"Create",component:CreateCategoryComponent},
    {path:"Product",component:ProductsComponent,title:"Product"},
    {path:"Order",component:OrdersComponent,title:"Order"},
    {path:"User",component:UserComponent,title:"User"},
    {path:"Category/:id",component:CategoryDetailsComponent},
    {path:"UpdateCategory/:id",component:UpdateCategoryComponent},
    {path:"**",component:NotFoundComponent}

];
