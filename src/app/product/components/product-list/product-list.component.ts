import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product, ProductRequest } from 'src/app/product/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products?: Product[];
  constructor(private productService: ProductsService, private cart: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().pipe(take(1)).subscribe((products: any) => { //what the hell ProductRequest
      this.products = products.products; 
    });
  }

  addProductToCart($event: Product): void {
    this.cart.addToCart($event);
  }
}
