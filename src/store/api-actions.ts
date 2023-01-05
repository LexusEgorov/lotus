import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosResponse } from 'axios';
import { ApiRequest, MOSCOW_TIME_ZONE, QueryParameter } from '../const';
import { AppDispatch, State, TimeResponse } from '../types';

export const fetchTimeAction = createAsyncThunk<any, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'time/get',
  async (_arg, {extra: api}) => {
    const response : AxiosResponse = await api.get<TimeResponse>(ApiRequest.TimeZone, {
      headers: {
        'accept': 'application/json',
      },
      params: {
        [QueryParameter.TimeZone]: MOSCOW_TIME_ZONE,
      }
    });
    
    console.log(1, response);

    const {data} = response
    return data;
  }
) 