import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart?: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  constructor() { }

  addToCart(product: Product) {
    this.productsInCart?.next([...this.productsInCart.value, product])
  }

  totalCart() {
    return this.productsInCart;
  }
}
