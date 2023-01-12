import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosResponse } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, DataResponse, State, TimeData, TimeResponse } from '../types';

export const fetchTimeAction = createAsyncThunk<TimeData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'time/get',
  async (_arg, {extra: api}) => {
    const startTime = performance.now();
    const { data } : AxiosResponse = await api.get<TimeResponse>(APIRoute.Time);
    const endTime = performance.now();

    const response = {
      timeLeft: data.timeLeft,
      step: data.step,
      delay: Math.floor((endTime - startTime - data.serverTime) / 2),
    }
    return response;
  }
) 

export const fetchDataAction = createAsyncThunk<DataResponse, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/get',
  async (_arg, {extra: api}) => {
    const { data } : AxiosResponse = await api.get<DataResponse>(APIRoute.Data);
    return data;
  }
) 
