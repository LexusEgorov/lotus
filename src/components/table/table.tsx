import { useEffect } from 'react';
import { USERS } from '../../fish';
import { useAppDispatch, useAppSelector, } from '../../hooks/hooks';
import { fetchTimeAction } from '../../store/api-actions';
import { nextStep, setUsersCount } from '../../store/app-data/app-data';
import { getMove } from '../../store/app-data/selectors';
import Timer from '../timer/timer';

function Table() : JSX.Element {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(getMove);

  useEffect(() => {
    dispatch(fetchTimeAction());
    dispatch(setUsersCount(USERS.length));
  }, [dispatch])  
  
  const handleChangeUser = () => {
    dispatch(nextStep());
  }

  return (
    <div className="table">
      <Timer changeUserHandler={handleChangeUser} /><br/>
      <h2>Ходит: {currentUser}</h2>
    </div>
  )
}

export default Table;
