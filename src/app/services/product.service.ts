import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {
  products: ProductType[] = [];

  get(): ProductType[] {
    return this.products = [
      {
        img: 'red-macaroon.png',
        title: 'Макарун с малиной',
        quantity: '1 шт',
        price: 1.70
      },
      {
        img: 'yellow-macaroon.png',
        title: 'Макарун с манго',
        quantity: '1 шт',
        price: 1.70
      },
      {
        img: 'white-macaroon.png',
        title: 'Пирог с ванилью',
        quantity: '1 шт',
        price: 1.70
      },
      {
        img: 'green-macaroon.png',
        title: 'Пирог с фисташками',
        quantity: '1 шт',
        price: 1.70
      },
    ];
  }
}
