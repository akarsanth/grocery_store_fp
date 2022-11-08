import { configureStore } from "@reduxjs/toolkit";

// reducers
import authReducer from "./features/auth/auth-slice";
import messageReducer from "./features/message/message-slice";
import categoryListReducer from "./features/category/categoryList-slice";
import cartReducer from "./features/cart/cart-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
    categoryList: categoryListReducer,
    cart: cartReducer,
  },
});

export default store;
