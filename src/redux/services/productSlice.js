import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
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
    getProduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getProductPagination: builder.query({
      query:({ page = 1, limit = 10 }) => `/products?page=${page}&limit=${limit}`,
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),

    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
    editProuduct: builder.mutation({
      query:({id,data})=>({
        url: `/products/${id}`,
        method: "PUT",
        body:data
      })
    })
  }),
});
export const {
  useGetProductQuery,
  useAddProductMutation,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useEditProuductMutation,
  useGetProductPaginationQuery
} = productApi;
