import { configureStore } from '@reduxjs/toolkit'
import catRatReducer from './features/catRat/catRatSlice'

export const store = configureStore({
  reducer: {
    catRat: catRatReducer
  },
})