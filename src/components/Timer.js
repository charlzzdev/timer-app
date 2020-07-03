import React, { useEffect } from 'react';
import secondsToTime from '../utils/secondsToTime';
import playSound from '../utils/playSound';

const Timer = ({ timer, setTimer }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      // start playing the sound without waiting another second at 00:00:00
      if (timer === 1) {
        const sound = playSound();
        setTimeout(() => sound.stop(), 5000);
      }

      // stop when the timer hits 0
      if (timer === 0) {
        clearInterval(interval);
        return;
      }

      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimer, timer]);

  return (
    <h1 className="text-center display-1 font-weight-normal my-5">
      {secondsToTime(timer)}
    </h1>
  );
}

export default Timer;
