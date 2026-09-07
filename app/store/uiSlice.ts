import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isOpen: boolean;
}

const initialState: UiState = {
  isOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = uiSlice.actions;
export default uiSlice.reducer;
