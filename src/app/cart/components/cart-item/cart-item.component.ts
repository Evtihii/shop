import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductsInCart } from '../../models/products-in-cart.model';

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() product!: ProductsInCart;

  // я бы так не делал, так как компонент получает данные,
  // то и пусть отдает их родителю, а не выполняет над ними операцию с помощью сервиса
  constructor(private cart: CartService) {}

  ngOnInit(): void {}

  addOne() {
    this.cart.quantityIncrease(this.product);
  }

  removeOne() {
    this.cart.quantityDecrease(this.product);
  }

  deleteItem() {
    this.cart.removeProduct(this.product);
  }

  get fullPrice() {
    return this.product?.product.price * this.product?.quantity;
  }
}
