import { Component, OnInit } from '@angular/core';
import { ProductsInCart } from '../../models/products-in-cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  checked = true;
  productsInCart: ProductsInCart[] = []
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.productsInCart$?.subscribe(e => this.productsInCart = e)
  }

  ngOnDestroy(): void {
    this.cart.productsInCart$?.unsubscribe();
  }

  get productsInCartSum() {
    return this.productsInCart.length;
  }

}
