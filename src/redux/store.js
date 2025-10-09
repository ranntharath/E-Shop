import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./services/productSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productApi.middleware,

    ),
});
setupListeners(store.dispatch);
