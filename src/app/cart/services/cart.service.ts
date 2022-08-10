import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Product } from 'src/app/product/models/product.model';
import { ProductsInCart } from '../models/products-in-cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsInCart$: BehaviorSubject<ProductsInCart[]> = new BehaviorSubject<
    ProductsInCart[]
  >([]);


  addToCart(product: Product) {
    this.productsInCart$.pipe(take(1)).subscribe((arr) => {
      let alreadyInCart = arr.filter((el) => el.product.id === product.id);
      if (!alreadyInCart.length) {
        this.productsInCart$.next([
          ...this.productsInCart$.value,
          {
            product,
            quantity: 1,
          },
        ]);
      } else {
        arr
          .filter((el) => product.id === el.product.id)
          .map((obj) => obj.quantity++);
      }
    });
  }

  quantityIncrease(product: ProductsInCart) {
    return product.quantity++;
  }

  quantityDecrease(product: ProductsInCart) {
    return product.quantity--;
  }

  removeProduct(product: ProductsInCart) {
    this.productsInCart$
      .pipe(take(1))
      .subscribe((arr) => arr.splice(arr.indexOf(product), 1));
  }

  cartProducts(): BehaviorSubject<ProductsInCart[]> {
    return this.productsInCart$;
  }

  removeAllProducts(): void {
    this.productsInCart$.next([])
  }

  isEmptyCart(): boolean {
    return !!this.productsInCart$.getValue().length;
  }

  get totalCost(): number {
    let sum = 0;
    this.productsInCart$.pipe(take(1)).subscribe((productsInCart) => {
      sum = productsInCart.reduce(
        (acc, curr) => acc + curr.quantity * curr.product.price,
        0
      );
    });
    return sum;
  }

  get totalQuantity(): number {
    let quantity = 0;
    this.productsInCart$.pipe(take(1)).subscribe((products) => {
      quantity = products.reduce((acc, curr) => acc + curr.quantity, 0)
    })
    return quantity;
  }

}
