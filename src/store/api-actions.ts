import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosResponse } from 'axios';
import { AppDispatch, State, TimeResponse } from '../types';

export const fetchTimeAction = createAsyncThunk<any, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'time/get',
  async (_arg, {extra: api}) => {
    const startTime = performance.now();
    const response : AxiosResponse = await api.get<TimeResponse>('');
    const endTime = performance.now();

    const data = {
      unixtime: response.data.unixtime,
      delay: (endTime - startTime) / 2,
    }
    return data;
  }
) 