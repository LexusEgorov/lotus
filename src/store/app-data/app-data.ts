import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppData } from '../../types';
import { fetchDataAction, fetchTimeAction } from '../api-actions';

const initialState : AppData = {
  currentUser: 0,
  timeLeft: 0,
  usersCount: 0,
}

export const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers : {
    nextStep : (state) => {
      state.currentUser = state.currentUser >= state.usersCount ? 1 : state.currentUser + 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTimeAction.fulfilled, (state, action) => {
        const {timeLeft, step} = action.payload;

        state.currentUser = step;
        state.timeLeft = timeLeft;
      })
      .addCase(fetchDataAction.fulfilled, (state, action) => {
        state.usersCount = action.payload.users.length;
      })
  },
});

export const {nextStep} = appData.actions;