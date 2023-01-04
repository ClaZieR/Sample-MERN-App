import { createApi,fetchBaseQuery  } from '@reduxjs/toolkit/query/react';

const baseURL= 'http://localhost:5005'

export const apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseURL}),
    endpoints:(builder) =>({
        getCategories:builder.query({
            query:()=>'/api/categories'
        }),
        getLables:builder.query({
            query:()=>'api/getjoin'
        })
    })

})


export default apiSlice;
