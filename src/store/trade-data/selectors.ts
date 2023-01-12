import { NameSpace } from '../../const';
import { Params, State, Users } from '../../types';

export const getUsers = (state: State) : Users => state[NameSpace.Trade].users;

export const getParams = (state: State) : Params => state[NameSpace.Trade].params;
