import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchTimeAction } from '../../store/api-actions';
import { getDelay, getUnixTime } from '../../store/app-process/selectors';

function Table() : JSX.Element {
  const dispatch = useAppDispatch();

  const unixTime = useAppSelector(getUnixTime);
  const delay = useAppSelector(getDelay);

  let timer = unixTime * 1000 + delay;

  const [time, setTime] = useState(new Date(timer).toLocaleTimeString());
  
  useEffect(() => {
    dispatch(fetchTimeAction());
  }, [dispatch])  


  useEffect(() => {
    if(unixTime === 0){
      return;
    }

    setInterval(() => {
      timer+= 1000;
      setTime(new Date(timer).toLocaleTimeString());
    }, 1000);    
  }, [unixTime]); 

  return (
    <div className="table">
      <h2>Время: {time}</h2>
    </div>
  )
}

export default Table;
