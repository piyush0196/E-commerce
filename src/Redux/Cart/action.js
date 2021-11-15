import * as actionTypes from "../../actionTypes";

export const addProductToCart = (product) => ({
  type: actionTypes.ADD_PRODUCT_TO_CART,
  payload: product,
});

export const addCartItem = (product) => ({
  type: actionTypes.ADD_CART_ITEM,
  payload: product,
});

export const removeCartItem = (product) => ({
  type: actionTypes.REMOVE_CART_ITEM,
  payload: product,
});
