import React, { useState } from 'react';
import Timer from './components/Timer';
import TimerSettings from './components/TimerSettings';

const App = () => {
  const [timer, setTimer] = useState(0); // 0 seconds by default

  return (
    <div className="mx-auto w-50">
      <Timer timer={timer} setTimer={setTimer} />
      <TimerSettings setTimer={setTimer} />
    </div>
  );
}

export default App;
