import { configureStore } from '@reduxjs/toolkit'
import CatRatReducer from './features/catRat/catRatSlice'

export const store = configureStore({
  reducer: {
    catRat: CatRatReducer
  },
})