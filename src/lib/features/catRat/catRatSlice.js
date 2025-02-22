import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  margin: 0,
}

export const CatRatSlice = createSlice({
  name : 'catRat',
  initialState,
  reducers: {
    forward: (state) => {
      if (state.margin < 750) {
        state.margin += 5;
      }
    },
    restart : (state) => {
      state.margin = 0;
    }
  }
})

export const { forward, restart } = CatRatSlice.actions

export default CatRatSlice.reducer