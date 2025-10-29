import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./services/productSlice";
import { userApi } from "./services/userSlice";
import { cartApi } from "./services/cartSlice";
import { orderApi } from "./services/orderSlice";
import { dashboardApi } from "./services/dashboard";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [cartApi.reducerPath]:cartApi.reducer,
    [orderApi.reducerPath]:orderApi.reducer,
    [dashboardApi.reducerPath]:dashboardApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productApi.middleware,
      userApi.middleware,
      cartApi.middleware,
      orderApi.middleware,
      dashboardApi.middleware
    ),
});
setupListeners(store.dispatch);
