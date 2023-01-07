import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppData } from '../../types';
import { fetchTimeAction } from '../api-actions';

const initialState : AppData = {
  time: 0,
  delay: 0,
  userMove: 0,
  usersCount: 0,
  countRequests: 0,
}

export const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers : {
    nextStep : (state) => {
      state.userMove = state.userMove >= state.usersCount ? 1 : state.userMove + 1;
    },
    setUserMove : (state, action) => {
      state.userMove = action.payload;
    },
    setUsersCount : (state, action) => {
      state.usersCount = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTimeAction.fulfilled, (state, action) => {
        state.time = action.payload.unixtime;
        state.delay += action.payload.delay;
        state.countRequests++;

        if(state.countRequests === 10){
          state.delay = Math.floor(state.delay / 10);
        }
      })
  },
});

export const {setUserMove, nextStep, setUsersCount} = appData.actions;