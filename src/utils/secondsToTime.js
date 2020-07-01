const secondsToTime = (s) => {
  const appendZero = number => number > 9 ? number : `0${number}`;

  const seconds = appendZero(s % 60);
  const minutes = appendZero(s / 60 % 60 | 0);
  const hours = appendZero(s / 60 / 60 | 0);

  return `${hours}:${minutes}:${seconds}`;
}

export default secondsToTime;
