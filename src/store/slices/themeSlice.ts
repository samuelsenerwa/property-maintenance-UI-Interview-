import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface ThemeState {
  darkMode: boolean;
}

// Initial state
const initialState: ThemeState = {
  darkMode: false,
};

// Create a slice
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

// Export actions
export const { toggleDarkMode, setDarkMode } = themeSlice.actions;

// Export selectors
export const selectDarkMode = (state: RootState) => state.theme.darkMode;

// Export the reducer
export default themeSlice.reducer;
