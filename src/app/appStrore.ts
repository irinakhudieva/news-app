import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { rootReducer } from "./appReducer"
import { newsApi } from "../entities/news/api/newsApi"

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})
  
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
  
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector