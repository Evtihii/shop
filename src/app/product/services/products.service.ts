import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  URL = 'https://dummyjson.com/products?limit=12';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Object> {
    return this.http.get(this.URL);
  }
}
