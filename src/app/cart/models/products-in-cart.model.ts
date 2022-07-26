import { Product } from "src/app/product/models/product.model";

export interface ProductsInCart {
    product: Product;
    quantity: number;
}