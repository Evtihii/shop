import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // тут не понял, почему это свойство является необязательным, если с ним ниже работа идет
  // в чем цель?
  productsInCart?: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  constructor() { }

  // можно немного усовершенствовать метод
  // 1. передавать несколько продуктов
  // 2. использовать метод в цепочке
  // это в целях демо
  addToCart(...products: Product[]): this {
    this.productsInCart?.next([...this.productsInCart.value, ...products]);
    return this;
  }

  totalCart() {
    return this.productsInCart;
  }
}
