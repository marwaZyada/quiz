import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbyname',
  standalone: true
})
export class SearchbynamePipe implements PipeTransform {

  transform(categories: any[],value: string): any[] {
    return  categories.filter((el:any)=>el.name.toLowerCase().includes(value.toLowerCase()));
  }

}
