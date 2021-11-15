import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "../../Redux/Cart/action";

import "./CartProduct.css";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-product-container">
      <div>
        <img
          className="cart-product-image"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div>
        <h2 className="cart-product-name">{product.title}</h2>
      </div>
      <div className="cart-product-price">
        <strong>Rs. {product.price}</strong>
      </div>
      <div className="cart-product-btns">
        <Button
          variant="contained"
          onClick={() => dispatch(addCartItem(product))}
          size="small"
        >
          +
        </Button>
        <p id="product-quant">{product.quantity}</p>
        <Button
          variant="contained"
          onClick={() => dispatch(removeCartItem(product))}
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
