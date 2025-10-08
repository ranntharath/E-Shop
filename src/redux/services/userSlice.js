import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
        prepareHeaders: (headers)=>{
            const token = localStorage.getItem('accessToken')

            if(token){
                headers.set('Authorization' , `$Bearer ${token}`)
            }
            return headers
        }
    })
})