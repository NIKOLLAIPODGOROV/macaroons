import {Component} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  showCart: boolean = true;

  constructor(public cartService: CartService) {

  }

}
