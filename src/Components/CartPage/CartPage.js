import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../Product/CartProduct";

import "./CartPage.css";

const CartPage = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  let cartPage = <h2>You don't have any cart items.</h2>;

  if (cartItems.length !== 0) {
    cartPage = (
      <div>
        <div className="cartItems-conatiner">
          {cartItems.map((item) => (
            <CartProduct key={item.id} product={item} />
          ))}
          <br />
        </div>
        <div id="total-price">
          <p>
            Total Price: <strong>{totalPrice}</strong>
          </p>
        </div>
      </div>
    );
  }
  return cartPage;
};

export default CartPage;
