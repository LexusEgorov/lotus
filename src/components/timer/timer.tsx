import { useEffect, useState } from 'react';
import { TIME_TO_MOVE } from '../../const';
import { USERS } from '../../fish';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { nextStep, setUserMove } from '../../store/app-data/app-data';
import { getUnixTime, getDelay, getMove } from '../../store/app-data/selectors';
import { getTimeLeft, getUserMove } from '../../utils';

const MS_TO_SECONDS = 1000;
const MS_TO_HOURS = 3600000; 

let interval : NodeJS.Timer;

function Timer() : JSX.Element {
  const dispatch = useAppDispatch();

  const unixTime = useAppSelector(getUnixTime);
  const delay = useAppSelector(getDelay);
  const userMove = useAppSelector(getMove);

  let timer = MS_TO_HOURS - (unixTime * 1000 + delay) % MS_TO_HOURS;

  const [time, setTime] = useState(new Date(timer).toLocaleTimeString().substring(3));
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if(unixTime === 0){
      return;
    }

    if(interval){
      clearInterval(interval);
    }

    interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = timer - MS_TO_SECONDS;
      const currentTime = new Date(timer);
      
      if(timer > TIME_TO_MOVE * 60000){
        timer = getTimeLeft(timer);
        dispatch(setUserMove(getUserMove(currentTime.getMinutes(), TIME_TO_MOVE, USERS.length)));
      }

      if(timer <= 0){
        timer = TIME_TO_MOVE * 60000;
        dispatch(nextStep());
      }

      if(currentTime.getMinutes() < 2){
        if(!isReady){
          setIsReady(true);
        }

        setTime(currentTime.toLocaleTimeString().substring(3));
      }
      
    }, 1000);
  }, [unixTime]);
  
  return(
    <>
      {isReady ? time : ''}
    </>
  );
}

export default Timer;
