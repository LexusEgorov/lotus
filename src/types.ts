import { store } from './store/store';

export type AppProcess = {
  isTimeLoading: boolean,
  isError: boolean,
}

export type AppData = {
  time: number,
  delay: number,
  userMove: number,
  usersCount: number,
  countRequests: number,
}

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type TimeResponse = {
  unixtime: string,
}

export type TimeData = {
  unixtime : number,
  delay : number
}
