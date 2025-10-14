import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['cart']
    }),

    getCart: builder.query({
        query:()=>({
            url: "/cart",
            method: "GET"
        }),
        providesTags: ['cart']

    }),
    updateCart:builder.mutation({
        query: (data)=>({
            url: '/cart',
            method: "PUT",
            body: data
        }),
        invalidatesTags: ["cart"]
    })
  }),
});
export const { useAddToCartMutation, useGetCartQuery, useUpdateCartMutation } = cartApi;
