import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  message: "",
  variant: "success",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
      state.variant = action.payload.variant;
    },
    closeSnackbar: (state) => {
      state.isOpen = false;
      state.message = "";
      state.variant = "success";
    },
  },
});

export const { showSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
