import React from 'react'

const TimerSettings = ({ setTimer }) => {
  return (
    <div>
      <button onClick={() => setTimer(60)}>1 min</button>
      <button onClick={() => setTimer(60 * 5)}>5 min</button>
      <button onClick={() => setTimer(60 * 10)}>10 min</button>
    </div>
  );
}

export default TimerSettings;
