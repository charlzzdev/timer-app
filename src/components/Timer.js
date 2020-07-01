import React, { useEffect } from 'react';
import secondsToTime from '../utils/secondsToTime';

const Timer = ({ timer, setTimer }) => {
  useEffect(() => {
    const interval = setInterval(() => {
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
    <div>
      {secondsToTime(timer)}
    </div>
  );
}

export default Timer;
