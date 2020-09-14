import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartStore } from '@core/cart/cart-store';
import { getCartItemsCount } from '@core/cart/cart-selectors';

@Component({
  selector: 'app-cart-items-count',
  templateUrl: './cart-items-count.component.html',
  styleUrls: ['./cart-items-count.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CartItemsCountComponent implements OnInit {
  totalItems$: Observable<number>;
  constructor(private cartstore:CartStore) { }

  ngOnInit() {
    this.totalItems$ = this.cartstore.select(getCartItemsCount);
  }

}
