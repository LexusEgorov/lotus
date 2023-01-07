import { NameSpace } from '../../const';
import { State } from '../../types';

export const getIsError = (state: State) : boolean => state[NameSpace.App].isError;

export const getIsLoading = (state: State) : boolean => state[NameSpace.App].isTimeLoading;
