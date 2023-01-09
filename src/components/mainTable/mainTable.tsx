import { Fragment } from 'react';
import { PARAMS, USERS } from '../../fish';
import { useAppSelector } from '../../hooks/hooks';
import { getMove } from '../../store/app-data/selectors';
import { generate } from '../../utils';
import Timer from '../timer/timer';

function MainTable() : JSX.Element {
  const currentUser = useAppSelector(getMove);

  if(currentUser === 0){
    return(
      <>
        <div className="loading">
          <p>Загрузка...</p>
          <p>Если на часах 59 минут, подождите до 00</p>
        </div>
        <Timer/>
      </>
    );
  }

  return(
    <article 
      className='main-table'
      style={{
        display: 'grid',
        gridTemplateColumns: `550px repeat(${USERS.length}, 300px)`, 
        gridTemplateRows: `auto 30px repeat(${PARAMS.length + 1}, auto)`
      }}
    >
      <p
        className="table-header"
        style={{
          gridColumn: 1,
          gridRow: 1,
        }}
      >
        Ход
      </p>
      <div
        className="timer-wrapper"
        style={{
          gridColumn: currentUser + 1,
          gridRow: 1,
        }}
      >
        <Timer />
      </div>
      <p
        className="table-header underline"
        style={{
          gridColumn: 1,
          gridRow: 3,
        }}
      >
        Параметры и требования
      </p>
      {
        USERS.map((user) => {
          return (
            <Fragment key={user.id}>
              <div
                className="table-header underline"
                style={{
                  gridColumn: user.id + 1,
                  gridRow: 3
                }}
                >
                  <p>Участник №{user.id}</p>
                  <p>{user.name}</p>
              </div>
              {
                user.params.map((parameter) =>
                  <p
                    key={generate()}
                    className={`parameter ${parameter.id % 2 === 0 ? '' : 'colored'}`}
                    style={{
                      gridColumn: user.id + 1,
                      gridRow: parameter.id + 3,
                    }}
                  >
                    {parameter.value}
                  </p>
                )
              }
              <div
                className='price colored'
                style={{
                  gridColumn: user.id + 1,
                  gridRow: -3
                }}
              >
                <b className="price-first">{user.price.first} руб.</b>
                <b className="decrement">-{user.price.decrement} руб.</b>
                <b className="price-total">{user.price.total} руб.</b>
              </div>
            </Fragment>
          );
        })
      }
      {
        PARAMS.map((parameter) => 
          <p
            key={parameter.id + USERS.length}
            className={parameter.id % 2 === 0 ? '' : 'colored'}
            style={{
              gridColumn: 1,
              gridRow: parameter.id + 3,
            }}
          >
            {parameter.parameter}
          </p>
        )
      }
    </article>
  );
}

export default MainTable;