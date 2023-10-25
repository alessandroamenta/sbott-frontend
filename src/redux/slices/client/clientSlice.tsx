import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  responseStatus: "",
  message: "",
  homeList: [],
};

const slice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getClientSuccess(state, action) {
      state.isLoading = false;
      state.homeList = action.payload;
    },

    clearMessages(state) {
      state.responseStatus = "";
      state.message = "";
    },

    clearErrorMessage(state) {
      state.error = null;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  startLoading,
  hasError,
  getClientSuccess,
  clearErrorMessage,
  clearMessages,
} = slice.actions;
