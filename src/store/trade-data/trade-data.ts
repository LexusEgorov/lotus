import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TradeData } from '../../types';
import { fetchDataAction } from '../api-actions';

const initialState : TradeData = {
  users: [],
  params: [],
}

export const tradeData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers : {},
  extraReducers(builder) {
    builder
      .addCase(fetchDataAction.fulfilled, (state, action) => {
        const {users, params} = action.payload;

        state.users = users;
        state.params = params;
      })
  },
});
