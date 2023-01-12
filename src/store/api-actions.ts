import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosResponse } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, DataResponse, State, TimeResponse } from '../types';

export const fetchTimeAction = createAsyncThunk<TimeResponse, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'time/get',
  async (_arg, {extra: api}) => {
    const startTime = performance.now();
    const { data } : AxiosResponse = await api.get<TimeResponse>(APIRoute.Time);
    const endTime = performance.now();
    //ntp
    return data;
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
