import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from 'src/app/product/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [MessageService],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  // этот компонент не является владельцем данных, выше у него инпут и он получает данные от родителя
  // зачем позволять компоненту выполнять добавление продукта в корзину
  // я бы попросил это сделать родителя и тогда, возможно, тут не было бы зависимостей
  constructor(private messageService: MessageService, private cart: CartService) {}

  ngOnInit(): void {}

  onAddToCart(product: Product): void {
    this.cart.addToCart(product);
    this.messageService.add({
      severity: 'success',
      summary: product.title,
      detail: 'Added to cart',
    });
  }

}
