import React, { useState } from 'react';
import CustomSimpleTimer from './CustomSimpleTimer';

const TimerSettings = ({ setTimer }) => {
  const [customSimpleFormActive, setCustomSimpleFormActive] = useState(false);
  const [buttons, setButtons] = useState([
    { name: '1 min', timer: 60 },
    { name: '5 min', timer: 60 * 5 },
    { name: '10 min', timer: 60 * 10 }
  ]);

  return (
    <div>
      <div className="row">
        {buttons.map(button => (
          <button
            className="btn btn-primary col-lg-3 rounded-0"
            key={Math.random()}
            onClick={() => setTimer(button.timer)}
          >
            {button.name}
          </button>
        ))}
        <button
          className="btn btn-dark col-lg-3 rounded-0"
          onClick={() => setCustomSimpleFormActive(!customSimpleFormActive)}
        >
          Custom Simple Timer
        </button>
      </div>

      {customSimpleFormActive && <CustomSimpleTimer
        setButtons={setButtons}
      />}
    </div>
  );
}

export default TimerSettings;
