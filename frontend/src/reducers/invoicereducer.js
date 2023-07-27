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


export const newinvoiceReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case NEW_INVOICE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_INVOICE_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          invoice: action.payload.order,
        };
      case NEW_INVOICE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    //   case CLEAR_ERRORS:
    //     return {
    //       ...state,
    //       error: null,
    //     };
      default:
        return state;
    }
  };

  export const allinvoices= (state = { orders: [] }, action) => {
    switch (action.type) {
      case ALL_INVOICE_REQUEST:
        return {
          loading: true,
        };
  
      case ALL_INVOICE_SUCCESS:
        return {
          loading: false,
          invoices: action.payload,
        };
  
      case ALL_INVOICE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };

  export const cartReducer = (
    state = { cartItems: [] },action) => {
    switch (action.type) {
  
      case REMOVE_CART_ITEM:
        return {
          ...state,
          success:true,
          cartItems: state.cartItems.filter((i) => i.product !== action.payload),
        };
      default:
        return state;
    }
  };


  export const operationsReducer=(state={ productss: [] }, action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
              productss:[...state.productss, action.payload]
            }
            case REMOVE_TODO:
             return{
              ...state,
              productss:state.productss.filter((todo)=>todo.id!==action.payload)
             }
        default: return state;
    }
    // return {
    //   ...state,
    //   cartItems: state.cartItems.filter((i) => i.product !== action.payload),
    // };

}