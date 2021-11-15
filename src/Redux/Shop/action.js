import axios from "axios";
import * as actionTypes from "../../actionTypes";

//Fetch all products

export const fetchProductsSuccess = (products) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchAllProductsFailure = (errorMsg) => ({
  type: actionTypes.FETCH_PRODUCTS_FAILURE,
  error: errorMsg,
});

export const fetchAllProducts = () => {
  return (dispatch) => {
    axios
      .get("http://fakestoreapi.com/products")
      .then(({ data }) => {
        dispatch(fetchProductsSuccess(data));
      })
      .catch((e) => {
        dispatch(fetchAllProductsFailure(e));
      });
  };
};

//Store searched products
export const storeSearchedProducts = (searchedProducts) => {
  return {
    type: actionTypes.STORE_SEARCHED_PRODUCTS,
    payload: searchedProducts,
  };
};

//Store search text
export const storeSearchText = (searchText) => {
  return {
    type: actionTypes.STORE_SEARCH_TEXT,
    payload: searchText,
  };
};

// Fetching single product

export const fetchSingleProductsStart = () => ({
  type: actionTypes.FETCH_SINGLE_PRODUCT_START,
});

export const fetchSingleProductsSuccess = (product) => ({
  type: actionTypes.FETCH_SINGLE_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchSingleProductsFailure = (errorMsg) => ({
  type: actionTypes.FETCH_SINGLE_PRODUCT_FAILURE,
  error: errorMsg,
});

export const fetchSingleProduct = (id) => {
  return (dispatch) => {
    dispatch(fetchSingleProductsStart());
    axios
      .get(`http://fakestoreapi.com/products/${id}`)
      .then(({ data }) => {
        dispatch(fetchSingleProductsSuccess(data));
      })
      .catch((e) => {
        dispatch(fetchSingleProductsFailure(e));
      });
  };
};

//search by category

export const searchByCategory = (category) => {
  return {
    type: actionTypes.SEARCH_BY_CATEGORY,
    payload: category,
  };
};
