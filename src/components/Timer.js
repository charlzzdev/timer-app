import React, { useEffect } from 'react';
import secondsToTime from '../utils/secondsToTime';
import playSound from '../utils/playSound';

const Timer = ({ timer, setTimer, paused }) => {
  useEffect(() => {
    const interval = !paused && setInterval(() => {
      // simple timer
      if (typeof timer === 'number') {
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
      } else {
        // stacked timer
        const newTimer = [...timer];
        newTimer[0]--;

        // start playing the sound after each timer expires
        if (timer[0] === 1) {
          const sound = playSound();
          setTimeout(() => sound.stop(), 5000);
        }

        // if the top timer hit 0, remove it from the array and continue
        if (timer[0] === 0) {
          newTimer.shift();
          // stop if there are no more timers left
          if (newTimer.length === 0) {
            clearInterval(interval);
            return;
          }
        }

        setTimer(newTimer);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimer, timer, paused]);

  return (
    <h1 className={`${paused ? 'text-muted' : ''} text-center display-1 font-weight-normal my-5`}>
      {secondsToTime(typeof timer === 'number' ? timer : timer[0])}
    </h1>
  );
}

export default Timer;
