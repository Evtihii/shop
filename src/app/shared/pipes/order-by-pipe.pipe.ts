import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/product/models/product.model';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipePipe implements PipeTransform {

  transform(items: Product[] | undefined, key: string, isAsc: boolean = false): any[] {
    if (!items) return [];

    if (key) items.sort((a:any, b:any) => a[key] > b[key] ? 1 : -1);
    console.log(key)
    //else items.sort((a, b) => a > b ? 1 : -1);

    if (isAsc) {
      console.log(items)
      
      items.reverse()};

    return items;
  }

}
