import { useEffect, useState } from 'react';
import { TIME_TO_MOVE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchTimeAction } from '../../store/api-actions';
import { nextStep } from '../../store/app-data/app-data';
import { getTimeLeft } from '../../store/app-data/selectors';

const MS_TO_SECONDS = 1000;
const REFRESH_TIME = 300000;

let interval : NodeJS.Timer;

function Timer() : JSX.Element {
  const dispatch = useAppDispatch();

  const timeLeft = useAppSelector(getTimeLeft);
  const [time, setTime] = useState(new Date(timeLeft / 1000).toLocaleTimeString().substring(3));
  let timer = timeLeft;

  useEffect(() => {
    setTimeout(() => dispatch(fetchTimeAction()), REFRESH_TIME);
    if(timeLeft === 0){
      return;
    }

    if(interval){
      clearInterval(interval);
    }

    interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = timer - MS_TO_SECONDS;
      const currentTime = new Date(timer);

      if(timer <= 0){
        timer = TIME_TO_MOVE * 60000;
        dispatch(nextStep());
      } else {
        setTime(currentTime.toLocaleTimeString().substring(3));
      }      
    }, 1000);
  }, [timeLeft]);
  
  return(
    <>
      {
        time
      }
    </>
  );
}

export default Timer;