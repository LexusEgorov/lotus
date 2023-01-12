import { NameSpace } from '../../const';
import { State } from '../../types';

export const getStep = (state: State) : number => state[NameSpace.Data].currentUser;

export const getTimeLeft = (state: State) : number => state[NameSpace.Data].timeLeft;
