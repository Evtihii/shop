import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/product/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() buyAction = new EventEmitter<Product>();

  onAddToCart(): void {
    this.buyAction.emit(this.product);
  }
}
