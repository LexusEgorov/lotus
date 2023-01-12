import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, TIME_TO_MOVE } from '../../const';
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
        const {timeLeft, step, delay} = action.payload;

        const fixedTime = timeLeft - delay;

        if(fixedTime > 0){
          state.currentUser = step;
          state.timeLeft = fixedTime;
        } else {
          state.timeLeft = (60000 * TIME_TO_MOVE) + fixedTime;
          
          if(state.usersCount === 0){
            state.currentUser = step + 1;
          } else {
            state.currentUser = state.currentUser >= state.usersCount ? 1 : state.currentUser + 1;
          }
        }
      })
      .addCase(fetchDataAction.fulfilled, (state, action) => {
        const length = action.payload.users.length;
        state.usersCount = length;

        if(state.currentUser > state.usersCount){
          state.currentUser = 1; 
        }
      })
  },
});

export const {nextStep} = appData.actions;