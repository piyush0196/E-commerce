import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../Redux/Shop/action";
import Product from "../Product/Product";
import Spinner from "../Spinner/Spinner";

import "./AllProducts.css";

const AllProducts = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const { isLoading, products, searchedProducts, searchText, categorySearch } =
    useSelector((state) => state.shop);

  let allProducts = <Spinner />;

  if (isLoading === false) {
    if (categorySearch.length !== 0) {
      allProducts = categorySearch.map((product) => (
        <Product key={product.id} product={product} />
      ));
    } else {
      if (searchedProducts.length === 0 && searchText === "") {
        allProducts = products[0].map((product) => (
          <Product key={product.id} product={product} />
        ));
      } else if (searchedProducts.length === 0 && searchText !== "") {
        allProducts = (
          <strong>Sorry! No products match your search term</strong>
        );
      } else {
        allProducts = searchedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ));
      }
    }
  }

  return <div className="products-container">{allProducts}</div>;
};

export default AllProducts;
