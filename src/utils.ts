export const getUserMove = (currentTime: number, timeToMove: number, usersCount: number) : number => {
  let userMove = 1;

  const movesCount = Math.floor(currentTime / timeToMove);

  for(let i = 0; i < movesCount; i++){
    userMove = userMove + 1 > usersCount ? 1 : userMove + 1;
  }

  return userMove;
};

export const getTimeLeft = (currentTime: number) : number => {
  const currentDate = new Date(currentTime);

  const timeLeft = currentDate.getSeconds() * 1000;
  if(currentDate.getMinutes() % 2 === 0){
    return timeLeft;
  }

  return timeLeft + 60000;
}

export const generator = () => {
  let counter = 1;

  return () => counter++;
}

export const generate = generator();
