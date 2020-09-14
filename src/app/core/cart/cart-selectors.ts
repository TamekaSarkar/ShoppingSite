import { CartState } from "./cart-state";
import { createSelector } from "reselect";

export const getCartItems = (state: CartState) => state.cartItems;

export const getCartItemsCount = (state: CartState) => {
  const cartItems = state.cartItems;
  const totalCartCount = cartItems.reduce(
    (totalCount, currentItem) => totalCount + currentItem.quantity,
    0
  );

  return totalCartCount;
};
export const getIsItemAlreadyInCart = ( id: number) =>
  createSelector(
    getCartItems,
    (items) => items.filter((item) => item.id === id).length > 0
  );