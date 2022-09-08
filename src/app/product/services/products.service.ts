import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
