import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    NEW_CATEGORY_REQUEST,
    NEW_CATEGORY_SUCCESS,
    NEW_CATEGORY_FAIL,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    PRODUCT_DETAILS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_RESET,
    NEW_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,
    CLEAR_ERRORS,
  } from '../constants/productconstant'
  
  export const productsReducer = (state = { product: [] },action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
          return {
            loading: true,
            product: [],
          };
        case ALL_PRODUCT_SUCCESS:
          return {
            loading: false,
            // action.payload me sara data arha aur action.payload.productsCount se jo k backend me likha 
            // usko get kr rhe
            product: action.payload.products,
            productsCount: action.payload.productsCount,
            //yaha ham backend se get kr rhe resultperpage jo dot laga kr kia productcontroller se
            //takay issay access kr ske front end k liye
          };
        case ALL_PRODUCT_FAIL:
          return {
            loading: false,
            error: action.payload,
          };
          case CLEAR_ERRORS:
           
                return {
                  ...state,
                  error: null,
                };
          default:
              return state;
        }
  };
  
  //product detail reducer  
  export const productDetailsReducer = (state = { product: {} }, action) => {
   
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case PRODUCT_DETAILS_SUCCESS:
        return {
          loading: false,
          product: action.payload,
        };
      case PRODUCT_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  // create product admin
  export const newProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case NEW_PRODUCT_REQUEST:
        case NEW_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_PRODUCT_SUCCESS:
        case NEW_CATEGORY_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          product: action.payload.product,
        };
      case NEW_PRODUCT_FAIL:
        case NEW_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_PRODUCT_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  //product reducer
  export const modifyproductReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_PRODUCT_REQUEST:
      case UPDATE_PRODUCT_REQUEST:
        case UPDATE_CATEGORY_REQUEST:
          case DELETE_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_PRODUCT_SUCCESS:
        case DELETE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_PRODUCT_SUCCESS:
        case UPDATE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_PRODUCT_FAIL:
      case UPDATE_PRODUCT_FAIL:
        case UPDATE_CATEGORY_FAIL:
          case DELETE_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_PRODUCT_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_PRODUCT_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          product: null,
        };
      default:
        return state;
    }
  };
  