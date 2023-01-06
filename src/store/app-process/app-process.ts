import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppProcess } from '../../types';
import { fetchTimeAction } from '../api-actions';

const initialState : AppProcess = {
  isTimeLoading: false,
  isError: false,
  time: 0,
  delay: 0,
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
        state.time = action.payload.unixtime;
        state.delay = action.payload.delay;
      })
      .addCase(fetchTimeAction.rejected, (state) => {
        state.isTimeLoading = false;
        state.isError = true;
      })
  },
});
