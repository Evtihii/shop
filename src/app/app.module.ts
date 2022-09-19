import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/components/header/header.component';


import { FirstComponentComponent } from './shared/components/first-component/first-component.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './product/products.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FrontPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CartModule,
    ProductsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// все ок
