import React, { useState } from 'react';
import secondsToTime from '../utils/secondsToTime';

const TimerSettings = ({ setTimer }) => {
  const [customFormActive, setCustomFormActive] = useState(false);
  const [buttons, setButtons] = useState([
    { name: '1 min', timer: 60 },
    { name: '5 min', timer: 60 * 5 },
    { name: '10 min', timer: 60 * 10 }
  ]);

  const handleCustomFormSubmit = e => {
    e.preventDefault();

    // input fields of name, hours, minutes and seconds
    const [name, hours, minutes, seconds] = e.target;
    // input fields' values converted to seconds
    const timer = parseInt(hours.value || 0) * 60 * 60
      + parseInt(minutes.value || 0) * 60
      + parseInt(seconds.value || 0);

    if (timer === 0) return; // don't add timer if it's for 0 seconds

    // add the new button to the list while keeping the others
    setButtons(buttons => [...buttons, {
      name: name.value || secondsToTime(timer),
      timer
    }]);
  }

  return (
    <div>
      {buttons.map(button => (
        <button
          key={Math.random()}
          onClick={() => setTimer(button.timer)}
        >
          {button.name}
        </button>
      ))}
      <button onClick={() => setCustomFormActive(!customFormActive)}>
        Custom
      </button>

      {customFormActive && <form onSubmit={handleCustomFormSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" style={{ width: '4rem' }} />
        <label htmlFor="hours">Hours</label>
        <input type="number" id="hours" defaultValue="0" min="0" style={{ width: '2rem' }} />
        <label htmlFor="minutes">Minutes</label>
        <input type="number" id="minutes" defaultValue="0" min="0" style={{ width: '2rem' }} />
        <label htmlFor="seconds">Seconds</label>
        <input type="number" id="seconds" defaultValue="0" min="0" style={{ width: '2rem' }} />
        <button>Add</button>
      </form>}
    </div>
  );
}

export default TimerSettings;
