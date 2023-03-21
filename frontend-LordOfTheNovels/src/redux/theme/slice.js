import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
  name: "theme",
  initialState: {
    theme: "light"
  },
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    }
  }
})

export const { setTheme } = themeReducer.actions
export default themeReducer.reducer
