import { NameSpace } from '../../const';
import { State } from '../../types';

export const getUnixTime = (state: State) : number => state[NameSpace.Data].time;

export const getDelay = (state: State) : number => state[NameSpace.Data].delay;

export const getMove = (state: State) : number => state[NameSpace.Data].userMove;
