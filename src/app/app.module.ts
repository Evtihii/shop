import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuModule } from 'primeng/menu';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { FirstComponentComponent } from './shared/components/first-component/first-component.component';
import { ProductComponent } from './product/components/product/product.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductComponent,
    ProductListComponent,
    FrontPageComponent,
    CartListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    PaginatorModule,
    ToastModule,
    MenuModule,
    ToggleButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
