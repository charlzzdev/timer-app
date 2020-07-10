import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import TimerSettings from './components/TimerSettings';

const App = () => {
  const [timer, setTimer] = useState(0); // 0 seconds by default
  const [paused, setPaused] = useState(false); // timer is not paused by default

  useEffect(() => {
    // pause timer after pressing the space key
    const handleKeyup = e => {
      e.key === ' ' && setPaused(!paused);

      parseInt(e.key) >= 0 && setTimer(e.key * 60);
    };
    document.addEventListener('keyup', handleKeyup);

    // remove event listener before each re-render
    return () => document.removeEventListener('keyup', handleKeyup);
  }, [paused]);

  return (
    <div className="mx-auto w-50">
      <Timer timer={timer} setTimer={setTimer} paused={paused} />
      <TimerSettings setTimer={setTimer} />
    </div>
  );
}

export default App;
