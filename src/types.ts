import { store } from './store/store';

export type AppProcess = {
  isTimeLoading: boolean,
  isError: boolean,
  time: number,
  delay: number,
}

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type TimeResponse = {
  datetime: string,
  unixtime: string,
}
