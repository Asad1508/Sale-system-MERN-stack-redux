import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { modifyproductReducer, newProductReducer, productDetailsReducer, productsReducer } from "./reducers/productreducer";
import { allinvoices, cartReducer, newinvoiceReducer, operationsReducer } from "./reducers/invoicereducer";
const reducer = combineReducers({
products:productsReducer,
createproduct:newProductReducer,
productdetails:productDetailsReducer,   
modifiedproductred:modifyproductReducer,
invoicedata:newinvoiceReducer,
allinvoice:allinvoices,
cart:cartReducer,
addred:operationsReducer
});

let initialState = {
};

const middleware = [thunk];

const store = createStore(
//yaha ham sab ka reducer bnaye gay jese product ka aur b kai
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

