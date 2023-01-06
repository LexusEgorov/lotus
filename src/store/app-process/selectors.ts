import { NameSpace } from '../../const';
import { State } from '../../types';

export const getUnixTime = (state: State) : number => state[NameSpace.App].time;

export const getDelay = (state: State) : number => state[NameSpace.App].delay;
