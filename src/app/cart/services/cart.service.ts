import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, filter, take } from 'rxjs';
import { Product } from 'src/app/product/models/product.model';
import { ProductsInCart } from '../models/products-in-cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsInCart$: BehaviorSubject<ProductsInCart[]> = new BehaviorSubject<
    ProductsInCart[]
  >([]);

  cartItems: Product[] = [];

  constructor(private http: HttpClient, private msgServ: MessageService) {}

  addToCart(product: Product) {
    let quantity = 1;
    this.productsInCart$.pipe(take(1)).subscribe((arr) => {
      let alreadyInCart = arr.filter((el) => el.product.id === product.id);
      if (!alreadyInCart.length) {
        this.productsInCart$.next([
          ...this.productsInCart$.value,
          {
            product,
            quantity: quantity,
          },
        ]);
      } else {
        arr.map((obj) => obj.quantity++);
      }
    });

    this.productsInCart$.pipe(take(1)).subscribe((e) => console.log(e));
  }

  totalCart() {
    return this.productsInCart$;
  }
}
