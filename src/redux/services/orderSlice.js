import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
        prepareHeaders: (headers)=>{
            const token = localStorage.getItem('accessToken')

            if(token){
                headers.set('Authorization',`Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (builder)=>({
        creaetOrder: builder.mutation({
            query: (data)=>({
                url: 'orders',
                method: "POST",
                body: data
            }),
        })
    })
})
export const {useCreaetOrderMutation} = orderApi