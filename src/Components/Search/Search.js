import { MenuItem, Select, TextField, InputLabel } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchByCategory,
  storeSearchedProducts,
  storeSearchText,
} from "../../Redux/Shop/action";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("none");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.shop.products[0]);

  useEffect(() => {
    if (products) {
      let searchedProd = products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase());
      });
      dispatch(storeSearchedProducts(searchedProd));
      dispatch(storeSearchText(searchText));
    }
  }, [searchText]);

  const onChangeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    dispatch(searchByCategory(e.target.value));
  };

  return (
    <div>
      <TextField
        style={{ margin: "50px 0 50px 550px" }}
        id="filled-helperText"
        label="What are you looking for?"
        type="search"
        variant="filled"
        value={searchText}
        onChange={onChangeHandler}
      />
      <InputLabel id="demo-simple-select-label">Search by category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="None"
        onChange={handleChange}
      >
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="men's clothing">Men's clothing</MenuItem>
        <MenuItem value="women's clothing">Women's clothing</MenuItem>
        <MenuItem value="jewelery">Jewelery</MenuItem>
        <MenuItem value="electronics">Electronics</MenuItem>
      </Select>
    </div>
  );
};

export default Search;
