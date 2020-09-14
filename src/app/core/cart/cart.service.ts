import { Injectable } from '@angular/core';
import { LogService } from '../log.service';
import { CartStore } from './cart-store';
import { Product } from '../products/product';
import { of } from 'rxjs';

export const ALLOWED_PRODUCT_QUANTITIES = Array.from(
  { length: 30 },
  (v, i) => i + 1
);

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private logservice:LogService,private cartstore:CartStore) { }

  addToCart(product:Product, quantity:number){
    this.logservice.log('[Cart] Add item');
    const cartItemToAdd = {
      ...product,
      quantity,
      itemTotal: product.price * quantity
    }
    this.cartstore.addCartItem(cartItemToAdd);
    return of(cartItemToAdd);
  }
}
