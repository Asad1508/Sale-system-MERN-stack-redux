import axios from 'axios';
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
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    CLEAR_ERRORS,} from '../constants/productconstant';


    // iss keyword me search kia howa arha ab iss keyword ko bhjy gay backend ko 
    export const getProduct=()=>async (dispatch)=>{
      
        try {
            dispatch({type:ALL_PRODUCT_REQUEST})
            // making request to backend to get data
            // backend se data get kr rhe jisme products, documentCount
          
            const {data}=await axios.get("/api/v1/getproduct")
            // ye sab data yani payload me data aur type bj rhe reducer k pass ja rha
            console.log("action"+data.products.name)
            dispatch({
                type:ALL_PRODUCT_SUCCESS,
                payload:data
            })

        } catch (error) {
            dispatch({
                type:ALL_PRODUCT_FAIL,
                error:error.response.data.message
            })
        }

    }
    // Get Product details
    export const getProductDetails =(id) =>
    async (dispatch) => {
      try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        console.log("ye actions ha isme data ahr ya ni"+id)
        // yaha ham request kr rhe backend se data ki
        const { data } = await axios.get(`/api/v1/getsingleproduct/${id}`);
  
        dispatch({
          type: PRODUCT_DETAILS_SUCCESS,
          payload: data.product,
        });
      } catch (error) {
        dispatch({
          type: PRODUCT_DETAILS_FAIL,
          payload: error.response.data.message,
        });
      }
    };
 
 // Create Product
 export const createProduct = (code, name, category,stock,retailprice,purchase,quantity) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/create`,
      {code, name, category,stock,retailprice,purchase,quantity},
      config
    );
    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
 export const addCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CATEGORY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/addcategory`,
      {category},
      config
    );
    dispatch({
      type: NEW_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};
          // Delete Product by admin
    export const deletecategory = (id) => async (dispatch) => {
      try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });
    
        const { data } = await axios.delete(`/api/v1/deletecategory/${id}`);
    
        dispatch({
          type: DELETE_PRODUCT_SUCCESS,
          payload: data.success,
        });
      } catch (error) {
        dispatch({
          type: DELETE_PRODUCT_FAIL,
          payload: error.response.data.message,
        });
      }
    };
    export const deleteProduct = (id) => async (dispatch) => {
      try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });
    
        const { data } = await axios.delete(`/api/v1/admin/productdlt/${id}`);
    
        dispatch({
          type: DELETE_PRODUCT_SUCCESS,
          payload: data.success,
        });
      } catch (error) {
        dispatch({
          type: DELETE_PRODUCT_FAIL,
          payload: error.response.data.message,
        });
      }
    };

    // Update Product
    export const updatecategory = (id,categor
      ) => async (dispatch) => {
        console.log("ye ha asli id"+id,categor)
      try {
        dispatch({ type: UPDATE_CATEGORY_REQUEST });
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        const { data } = await axios.put(
          `/api/v1/editcategory/${id}`,
           {categor},
           config
        );
        console.log("final "+data.product)
    
        dispatch({
          type: UPDATE_CATEGORY_SUCCESS,
          payload: data.success,
        });
      } catch (error) {
        dispatch({
          type: UPDATE_CATEGORY_FAIL,
          payload: error.response.data.message,
        });
      }
    };
    // Update Product
    export const updateProduct = (id,code, name, category,stock,retailprice,purchase,quantity,
      ) => async (dispatch) => {
        console.log("ye ha asli id"+id)
      try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });
    
        const config = {
          headers: { "Content-Type": "application/json" },
        };
    
        const { data } = await axios.put(
          `/api/v1/updateproduct/${id}`,
          {code, name, category,stock,retailprice,purchase,quantity},
          config
        );
    
        dispatch({
          type: UPDATE_PRODUCT_SUCCESS,
          payload: data.success,
        });
      } catch (error) {
        dispatch({
          type: UPDATE_PRODUCT_FAIL,
          payload: error.response.data.message,
        });
      }
    };
    // Clearing Errors
    export const clearErrors = () => async (dispatch) => {
        dispatch({ type: CLEAR_ERRORS });
      };
      