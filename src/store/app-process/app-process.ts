import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppProcess } from '../../types';
import { fetchDataAction, fetchTimeAction } from '../api-actions';

const initialState : AppProcess = {
  isDataLoading: false,
  isTimeLoading: false,
  isLoading: false,
  isError: false,
}

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers : {},
  extraReducers(builder) {
    builder
      .addCase(fetchTimeAction.pending, (state) => {
        state.isTimeLoading = true;
        state.isLoading = true;
      })
      .addCase(fetchDataAction.pending, (state) => {
        state.isDataLoading = true;
        state.isLoading = true;
      })
      .addCase(fetchTimeAction.fulfilled, (state) => {
        state.isTimeLoading = false;
        state.isLoading = state.isDataLoading;
      })
      .addCase(fetchDataAction.fulfilled, (state) => {
        state.isDataLoading = false;
        state.isLoading = state.isTimeLoading;
      })
      .addCase(fetchDataAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchTimeAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
  },
});
