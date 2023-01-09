export const getUserMove = (currentTime: number, timeToMove: number, usersCount: number) : number => {
  const round = timeToMove * usersCount;
  let time = currentTime;
  let counter = 0;

  while(round < time){
    time = time - round;
  }

  for(let i = time; i > 0; i = i - timeToMove){
    counter++;
  }

  return counter;
}

export const getTimeLeft = (currentTime: number) : number => {
  const currentDate = new Date(currentTime);

  const timeLeft = currentDate.getSeconds() * 1000;

  if(currentDate.getMinutes() % 2 === 0){
    return timeLeft;
  }

  return timeLeft + 60000;
}

export const generator = () => {
  let counter = 31;

  return () => counter++;
}

export const generate = generator();
