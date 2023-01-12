import { store } from './store/store';

export type AppProcess = {
  isDataLoading: boolean,
  isTimeLoading: boolean,
  isLoading: boolean,
  isError: boolean,
}

export type AppData = {
  currentUser: number,
  timeLeft: number,
  usersCount: number,
}

export type TradeData = {
  users: Users,
  params: Params,
}

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type UserParam = {
  id: number,
  value: string,
}

export type User = {
  id: number,
  name: string,
  params: UserParam[],
  price: {
    first: string,
    decrement: string,
    total: string,
  }
}

export type Param = {
  id: number,
  parameter: string,
}

export type Params = Param[];
export type Users = User[];

export type TimeResponse = {
  timeLeft: number,
  step: number,
  serverTime: number,
}

export type TimeData = {
  timeLeft: number,
  step: number,
  delay: number,
}

export type DataResponse = {
  users: Users,
  params: Params,
}