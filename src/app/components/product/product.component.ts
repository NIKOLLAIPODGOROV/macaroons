import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor(private cartService: CartService) {
    this.product = {
      img: '',
      title: '',
      quantity: '',
      price: 0
    };
  }
  public addToCart(): void {
    //по клику на кнопку заказать в карточке товара
    //увеличиваем счетчик в корзине
    this.cartService.count++;

    //увеличиваем сумму товаров в корзине
    this.cartService.sum += this.product.price;

    //передаем инфу о товаре родителю(main.component)
    this.addToCartEvent.emit(this.product);
  }
}
