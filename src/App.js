import React, { useState } from 'react';
import Timer from './components/Timer';
import TimerSettings from './components/TimerSettings';

const App = () => {
  const [timer, setTimer] = useState(0); // 0 seconds by default

  return (
    <>
      <Timer timer={timer} setTimer={setTimer} />
      <TimerSettings setTimer={setTimer} />
    </>
  );
}

export default App;
