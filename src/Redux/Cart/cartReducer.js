import * as actionTypes from "../../actionTypes";
import { addItemToCart, removeCartItem } from "./Cart.util";

const initialState = {
  cartItems: [],
  isLoading: false,
  totalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };

    case actionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        totalPrice: state.totalPrice + action.payload.price,
      };

    case actionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
        totalPrice: state.totalPrice - action.payload.price,
      };

    default:
      return state;
  }
};
