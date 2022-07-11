import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  URL = 'https://dummyjson.com/products?limit=12';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.URL);
  }
}
