import React from "react";
import "./ProductCategories.css";

import Card from "@mui/material/Card";
import { CardActions, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ProductCategories = (props) => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="category-container">
      {categories.map((category) => {
        return (
          <Card>
            <CardContent>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                {category}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/categoryPage/${category}`}>View all {category}</Link>
            </CardActions>
          </Card>
        );
      })}
      <div className="all-products-btn">
        <Button variant="contained" component={Link} to={"/all-products"}>
          All Products
        </Button>
      </div>
    </div>
  );
};

export default ProductCategories;
