import { useEffect } from 'react';
import { USERS } from '../../fish';
import { useAppDispatch } from '../../hooks/hooks';
import { fetchTimeAction } from '../../store/api-actions';
import { setUsersCount } from '../../store/app-data/app-data';
import MainTable from '../mainTable/mainTable';

function Board() : JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTimeAction());
    dispatch(setUsersCount(USERS.length));
  }, [dispatch])  

  return (
    <section className="board">
      <header className='board-header'>
        <p>Ход торгов <b>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)</b></p>
      </header>
      <p className="message">Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:</p>
      <MainTable />
    </section>
  )
}

export default Board;
