import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  lang: "en" | "de" | "el"; // Supported languages
}

const initialState: LanguageState = { lang: "en" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
