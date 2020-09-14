import { Injectable } from '@angular/core';
import { Store } from '../store';
import { CartState, initialState } from './cart-state';
import { LogService } from '../log.service';
import { CartItem } from './cart-item';


@Injectable({ providedIn: 'root' })
export class CartStore extends Store<CartState> {
    
  
    constructor(private logservice: LogService){
        super(initialState);
    }

    addCartItem(cartItemToAdd: CartItem) {
        const newState = {
            ...this.state,
            CartItem:[].concat(this.state.cartItems,cartItemToAdd )
        };
        this.setState(newState);
      }
      //remove cart item

      removeCartItem = (cartItemToRemove: CartItem) => {
        console.log('[Cart] Remove Item');
        const newState = {
            ...this.state, //cartItems
            cartItems: this.state.cartItems.filter(
                CartItem => CartItem.id !== cartItemToRemove.id
            )
        }

        this.setState(newState);
    
        
      };

      updateCartItem(cartItemToUpdate: CartItem){

        console.log('[Cart] update Item');
        const newState = {
            ...this.state, //cartItems
            cartItems: this.state.cartItems.map(
                CartItem => CartItem.id === cartItemToUpdate.id?cartItemToUpdate : CartItem
            )
        }

        this.setState(newState);
          
      }

      //clear cart
      clearCart = () => {
        this.logservice.log('[Cart] Clear Item');
         const newState = initialState;
        this.setState(newState);
      };
     //restore cart
     restoreCart(stateToRestore: CartState){
         this.setState(stateToRestore);
     }
      
}

