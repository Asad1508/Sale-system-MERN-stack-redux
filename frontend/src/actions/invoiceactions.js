import axios from 'axios';
import {
    NEW_INVOICE_REQUEST,
    NEW_INVOICE_SUCCESS,
    NEW_INVOICE_FAIL,
    ALL_INVOICE_REQUEST,
    ALL_INVOICE_SUCCESS,
    ALL_INVOICE_FAIL,
    REMOVE_CART_ITEM,
    ADD_TODO,
    REMOVE_TODO
} from '../constants/invoiceconstants'

export const createinvoice = (name,quantity,price) => async (dispatch) => {
    try {
      dispatch({ type: NEW_INVOICE_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `/api/v1/createinvoice`,
        {name,quantity,price},
        config
      );
      dispatch({
        type: NEW_INVOICE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_INVOICE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const getAllinvoices = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_INVOICE_REQUEST });
  
      const { data } = await axios.get("/api/v1/getinvoices");
  
      dispatch({ type: ALL_INVOICE_SUCCESS, payload: data.orders });
    } catch (error) {
      dispatch({
        type: ALL_INVOICE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  export const removeItemsFromCart = (id) => async (dispatch) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };

//   export const addTod=(qt,name,price)=>{
//     console.log(name,qt,price)
//     return{
//         type: ADD_TODO,
//         payload:qt,
//         payload:name,
//         payload:price
//     }

// }
export const addTodo = (id,qt,name,price) => async (dispatch) => {
  console.log(qt,name,price)
  dispatch({
    type:  ADD_TODO,
    payload:{
      id:id,
      quantity:qt,
    name:name,
    price:price
    }
  });
}
export const removeTodo = (payload) => async (dispatch) => {
  // console.log(qt,name,price)
  dispatch({
    type:  REMOVE_TODO,
    payload
  });
}

