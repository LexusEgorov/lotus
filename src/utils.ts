export const getUserMove = (currentTime: number, timeToMove: number, usersCount: number) : number => Math.floor(currentTime / timeToMove) % usersCount + 1;

export const getTimeLeft = (currentTime: number) : number => {
  const currentDate = new Date(currentTime);

  const timeLeft = currentDate.getSeconds() * 1000;
  if(currentDate.getMinutes() % 2 === 0){
    return timeLeft + 60000;
  }

  return timeLeft;
}
