import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
  name: "theme",
  initialState: {
    theme: "dark"
  },
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark"
    }
  }
})

export const { setTheme } = themeReducer.actions
export default themeReducer.reducer
