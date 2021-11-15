import { Button, CardActions, Typography, Icon } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addProductToCart } from "../../Redux/Cart/action";
import { fetchSingleProduct } from "../../Redux/Shop/action";
import Spinner from "../Spinner/Spinner";

import "./SingleProduct.css";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { singleProduct, isLoading } = useSelector((state) => state.shop);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  let product = <Spinner />;

  if (isLoading === false) {
    product = (
      <div className="singleProduct-container">
        <div className="image-container">
          <img src={singleProduct.image} alt={singleProduct.title} />
        </div>
        <div className="product-details">
          <Typography variant="h5">{singleProduct.title}</Typography>
          <Typography variant="h6">{singleProduct.description}</Typography>
          <Typography variant="h5">₹ {singleProduct.price}</Typography>
          <CardActions>
            <Button
              variant="contained"
              startIcon={<Icon>+</Icon>}
              onClick={() => {
                dispatch(addProductToCart({ ...singleProduct, quantity: 1 }));
                window.alert("Item added to cart");
              }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </div>
      </div>
    );
  }

  return <div>{product}</div>;
};

export default SingleProduct;
