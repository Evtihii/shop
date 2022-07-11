import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductRequest } from 'src/app/product/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products?: Product[];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: any) => { //what the hell ProductRequest
      this.products = products.products; 
    });
  }
}
