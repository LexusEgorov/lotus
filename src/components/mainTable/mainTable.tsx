import { Fragment } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { getStep } from '../../store/app-data/selectors';
import { getIsLoading } from '../../store/app-process/selectors';
import { getParams, getUsers } from '../../store/trade-data/selectors';
import { generate } from '../../utils';
import Timer from '../timer/timer';

function MainTable() : JSX.Element {
  const currentUser = useAppSelector(getStep);
  const isLoading = useAppSelector(getIsLoading);
  const users = useAppSelector(getUsers);
  const params = useAppSelector(getParams);

  if(isLoading){
    return(
      <>
        <div className="loading">
          <p>Загрузка...</p>
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
        gridTemplateColumns: `550px repeat(${users.length}, 300px)`, 
        gridTemplateRows: `auto 30px repeat(${params.length + 1}, auto)`
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
        users.map((user) => {
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
        params.map((parameter) => 
          <p
            key={parameter.id + users.length}
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