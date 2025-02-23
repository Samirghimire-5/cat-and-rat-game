import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  margin: 0,
}

export const catRatSlice = createSlice({
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

export const { forward, restart } = catRatSlice.actions

export default catRatSlice.reducer