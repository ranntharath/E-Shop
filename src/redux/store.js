import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./services/productSlice";
import { userApi } from "./services/userSlice";
import { cartApi } from "./services/cartSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [cartApi.reducerPath]:cartApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productApi.middleware,
      userApi.middleware,
      cartApi.middleware
    ),
});
setupListeners(store.dispatch);
