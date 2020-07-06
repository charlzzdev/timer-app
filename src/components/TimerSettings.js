import React, { useState } from 'react';
import CustomSimpleTimer from './CustomSimpleTimer';
import CustomStackedTimer from './CustomStackedTimer';

const TimerSettings = ({ setTimer }) => {
  const [customSimpleFormActive, setCustomSimpleFormActive] = useState(false);
  const [customStackedFormActive, setCustomStackedFormActive] = useState(false);
  const [buttons, setButtons] = useState([
    { name: '1 min', timer: 60 },
    { name: '5 min', timer: 60 * 5 },
    { name: '10 min', timer: 60 * 10 },
    { name: '5 minutes, then 1 minute', timer: [5 * 60, 60] }
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
        <button
          className="btn btn-dark col-lg-3 rounded-0"
          onClick={() => setCustomStackedFormActive(!customStackedFormActive)}
        >
          Custom Stacked Timer
        </button>
      </div>

      {customSimpleFormActive && <CustomSimpleTimer
        setButtons={setButtons}
      />}
      {customStackedFormActive && <CustomStackedTimer
        setButtons={setButtons}
      />}
    </div>
  );
}

export default TimerSettings;
