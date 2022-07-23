import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/components/shared.module';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [SharedModule],
  exports: [CartListComponent],
  providers: [MessageService],
})
export class CartModule {}
