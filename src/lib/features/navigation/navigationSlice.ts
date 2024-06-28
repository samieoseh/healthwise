import { createSlice } from "@reduxjs/toolkit";

export interface navigationState {
  value: string
}

const initialState: navigationState  ={
  value: "hone"
}

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavigation: (state, action) => { state.value = action.payload}
  }
})

export const  { setNavigation } = navigationSlice.actions

export default navigationSlice.reducer