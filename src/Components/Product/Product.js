import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
  Icon,
} from "@mui/material";

import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { addProductToCart } from "../../Redux/Cart/action";
import "./Product.css";

const Product = ({ product, history }) => {
  const dispatch = useDispatch();

  const addCartItemHandler = (product) => {
    dispatch(addProductToCart({ ...product, quantity: 1 }));
    window.alert("Item added to Cart");
  };

  const onProductClickHandler = (id) => {
    history.push(`product/${id}`);
  };

  return (
    <div>
      <Card
        sx={{ maxWidth: 345 }}
        className="product-card"
        onClick={() => onProductClickHandler(product.id)}
      >
        <CardHeader title={product.title} />
        <CardMedia component="img" image={product.image} height="180" />
        <CardContent>
          <Typography>{product.description}</Typography>
          <br />
          <Typography>
            <strong>Category:</strong> {product.category}
          </Typography>
          <br />
          <Typography variant="h5">₹ {product.price}</Typography>
        </CardContent>
      </Card>
      <Button
        className="addCart-btn"
        variant="outlined"
        startIcon={<Icon>+</Icon>}
        onClick={() => addCartItemHandler(product)}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default withRouter(Product);
