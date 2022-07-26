import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from 'src/app/product/models/product.model';
import { ProductsService } from '../../services/products.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products?: Product[];
  constructor(private productService: ProductsService, private cart: CartService, private msg: MessageService) {}

  ngOnInit(): void {
    this.productService.getProducts().pipe(take(1)).subscribe((products: any) => { 
      this.products = products.products; 
    });
  }

  addProductToCart($event: Product): void {
    this.cart.addToCart($event);
    this.msg.add({
      severity: 'success',
      summary: $event.title,
      detail: 'Added to cart',
    });
  }
}
