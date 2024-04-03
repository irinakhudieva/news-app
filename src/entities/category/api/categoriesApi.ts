import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CategoriesApiResponse } from '../model/types'


const BASE_URL= process.env.REACT_APP_NEWS_BASE_API_URL
const API_KEY= process.env.REACT_APP_NEWS_API_KEY

export const categoriesApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesApiResponse, null>({
        query: () => {
          return {
            url: 'available/categories',
            params: {
              apiKey: API_KEY,
            }
          }
        },
    }),
  }),
})


export const { useGetCategoriesQuery } = categoriesApi