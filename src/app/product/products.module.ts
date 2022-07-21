import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/components/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ProductComponent, ProductListComponent],
  exports: [ProductComponent, ProductListComponent],
})
export class ProductsModule {}
