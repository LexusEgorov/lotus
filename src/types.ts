import { store } from './store/store';

export type AppProcess = {
  isTimeLoading: boolean,
  isError: boolean,
}

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type TimeResponse = {
  timeZone: string,
  currentLocalTime: string,
}
