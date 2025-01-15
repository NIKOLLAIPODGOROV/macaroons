import {Injectable} from '@angular/core';
import {CartService} from "./cart.service";
import {ProductService} from "./product.service";
import {ProductType} from "../types/product.type";

@Injectable()
export class CartProductService {
  count: number = 0;
  sum: number = 0;
  price: number = 0;

  constructor(private cartService: CartService, private productService: ProductService) {
  }

  getCommonCount() {
    return this.cartService.count;
  }

   // getProductsPrice():number | any {
   //  const prices = this.productService.getProducts();
   //   for (let i = 0; i < prices.length; i++) {
   //     let price = prices[i].price;
   //     return  price
   //   }
   // }

    getProductsPrice() {
     return this.cartService.sum;
    }


}
