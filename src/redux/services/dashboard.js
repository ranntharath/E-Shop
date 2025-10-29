import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const dashboardApi = createApi({
    reducerPath:"dashboardApi",
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_BACKEND_URL,
        prepareHeaders: (headers)=>{
            const token = localStorage.getItem("accessToken")

            if(token){
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (builder)=>({
        getStats: builder.query({
            query:()=>({
                url:"/admin/dashboard",
                method:"GET"
            })
        }),

        
    }),
    

})

export const  {useGetStatsQuery} = dashboardApi