import * as actionTypes from "../../actionTypes";
// import { searchByCategory } from "./action";
import { searchByCategoryFunc } from "./shop.utils";

const initialState = {
  products: [],
  isLoading: true,
  error: "",
  singleProduct: {},
  searchedProducts: [],
  searchText: "",
  categorySearch: [],
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    //All Products
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [action.payload],
        isLoading: false,
      };
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    //store searched products

    case actionTypes.STORE_SEARCHED_PRODUCTS:
      return {
        ...state,
        searchedProducts: action.payload,
      };

    //store searched text

    case actionTypes.STORE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };

    //single product

    case actionTypes.FETCH_SINGLE_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: action.payload,
        isLoading: false,
      };

    case actionTypes.FETCH_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    //search by category
    case actionTypes.SEARCH_BY_CATEGORY:
      return {
        ...state,
        categorySearch: searchByCategoryFunc(state.products[0], action.payload),
      };

    default:
      return state;
  }
};
