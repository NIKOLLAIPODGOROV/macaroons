import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {OrderValueType} from "./types/order-value.type";
import {AdvantageType} from "./types/advantage.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {CommonService} from "./services/common.service";

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {

  products: ProductType[] = [];

  public advantages: AdvantageType[] = [
    {
      id: 1,
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',

    },
    {
      id: 2,
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      id: 3,
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      id: 4,
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ];

  public orderValue: OrderValueType = {
    productTitle: null,
    userName: null,
    userPhone: null
  };

  constructor(private productsService: ProductService,
              public commonService: CommonService,) {
  }

  ngOnInit() {

    //получаем продукты пользуясь сервисом ProductService
    this.products = this.productsService.get();
  }


  public innerToForm(product: ProductType, targetScroll: HTMLElement): void {
    const customTitle: string = product.title.toUpperCase();
    alert(`${customTitle} добавлен в корзину!`);
    this.orderValue.productTitle = customTitle;
    this.commonService.scrollTo(targetScroll);
  }

  public createOrder(): void {
    if (!this.orderValue.productTitle) {
      alert("Выбирете макарун");
      return;
    }
    if (!this.orderValue.userName) {
      alert("Введите имя");
      return;
    }
    if (!this.orderValue.userPhone) {
      alert("Введите номер телефона");
      return;
    }
    //ajax
    alert("Заказ создан");
    this.orderValue.productTitle = null;
    this.orderValue.userName = null;
    this.orderValue.userPhone = null;
  }
}
