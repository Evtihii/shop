import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  checked = true;
  productsInCart: Product[] = []
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.productsInCart?.subscribe(e => this.productsInCart = e)
  }

  get productsInCartSum() {
    return this.productsInCart.length;
  }

}
