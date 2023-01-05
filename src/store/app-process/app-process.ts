import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppProcess } from '../../types';
import { fetchTimeAction } from '../api-actions';

const initialState : AppProcess = {
  isTimeLoading: false,
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
      })
      .addCase(fetchTimeAction.fulfilled, (state, action) => {
        state.isTimeLoading = false;
        state.isError = false;

        console.log(action.payload);
      })
      .addCase(fetchTimeAction.rejected, (state) => {
        state.isTimeLoading = false;
        state.isError = true;
      })
  },
});
