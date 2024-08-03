import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
token:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXJyd2EzMjUxQGdtYWlsLmNvbSIsImVtYWlsIjoibWFycndhMzI1MUBnbWFpbC5jb20iLCJleHAiOjE3MjY3NTUwNTQsImlzcyI6IkNsZWFuSXNzdWVyIiwiYXVkIjoiQ2xlYW5BdWRpZW5jZSJ9.Fgs91KXthr-XdWCPPbhqY7KC0CMK1JlZf5PZG2sFGr8"
 headers = { 'token':this.token}  
 formData = new FormData();
constructor(private _http:HttpClient) { 
    localStorage.setItem("token",this.token)
  }
// get 
  GetCateegories():Observable<any>{
    return this._http.get<any>("http://foodsystem.tryasp.net/Category")
  }

// get by id
GetSpecificCateegory(id:number):Observable<any>{
  return this._http.get<any>(`http://foodsystem.tryasp.net/Category?id=${id}`)
}

  // add 
  AddCategory(data:any):Observable<any>{
    this.formData=new FormData()
    // Append form fields to FormData object
    this.SendFormateData(data)
const headers = new HttpHeaders({
   token:this.token
})
    return this._http.post("http://foodsystem.tryasp.net/Category",this.formData,{ headers })
  }
    // Delete 
    DeleteCategory(id:any):Observable<any>{
return this._http.delete(`http://foodsystem.tryasp.net/Category?id=${id}`,{'headers':this.headers})
    }
// update 

   UpdateCategory(data:any):Observable<any>{
    this.formData=new FormData()
     // Append form fields to FormData object

     this.SendFormateData(data)
      return this._http.put(`http://foodsystem.tryasp.net/Category`,this.formData,{'headers':this.headers})
          }

  SendFormateData(data:any){
   
  
    // Append form fields to FormData object
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
       this.formData.append(key,data[key]);
      }
    } 
   
  }
  
}
