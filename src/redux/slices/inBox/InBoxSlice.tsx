import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import InBoxService from "../../../services/InBoxService";

export const InBox = createAsyncThunk("inBoxs/InBox", async (args) => {
  try {
    const response = await InBoxService.getInBox();
    return response?.data;
  } catch (error) {
    console.log("error");
  }
});

const InBoxSlice = createSlice({
  name: "inBoxs",
  initialState: {
    loading: false,
    InBoxList: [],
  },
  reducers: {
    setInBox: (state, action) => {},
  },
  //   extraReducers: {
  //     [InBox.pending]: (state) => {
  //       state.loading = true;
  //     },
  //     [InBox.fulfilled]: (state, action) => {
  //       state.loading = false;
  //       state.InBoxList = action.payload;
  //     },
  //     [InBox.rejected]: (state) => {
  //       state.loading = false;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(InBox.fulfilled, (state, { payload }) => {});
    builder.addCase(InBox.rejected, (state, action) => {});
    builder.addCase(InBox.pending, (state, action) => {});
  },
});

export const { setInBox } = InBoxSlice.actions;
export default InBoxSlice.reducer;
