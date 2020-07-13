import React, { useState } from 'react';
import secondsToTime from '../utils/secondsToTime';

const CustomStackedTimer = ({ setButtons }) => {
  const [timerCount, setTimerCount] = useState([1, 2]);

  const handleCustomStackedFormSubmit = e => {
    e.preventDefault();

    const inputs = [];
    const name = e.target[0].value;

    // get inputs excluding the name input and the buttons
    for (let i = 0; i < e.target.length; i++) {
      if (/hours/.test(e.target[i].id)) {
        inputs.push([e.target[i], e.target[i + 1], e.target[i + 2]]);
      }
    }

    const timers = inputs.map(([hours, minutes, seconds]) => {
      // input fields' values converted to seconds
      return parseInt(hours.value || 0) * 60 * 60
        + parseInt(minutes.value || 0) * 60
        + parseInt(seconds.value || 0);
    });

    // don't add if not all timers are over 0
    if (!timers.every(time => time > 0)) return;

    // add the new button to the list while keeping the others
    setButtons(buttons => [...buttons, {
      name: name || timers.map(t => secondsToTime(t)).join(', then '),
      timer: timers
    }]);
  }

  const addNewTimerRow = () => {
    setTimerCount([...timerCount, timerCount[timerCount.length - 1] + 1]);
  }

  const deleteTimerRow = t => {
    setTimerCount(timerCount.filter(c => c !== t));
  }

  return (
    <form
      className="row w-100 mt-5 mx-auto"
      onSubmit={handleCustomStackedFormSubmit}
    >
      <h1 className="p-0 mb-4">Add a Custom Stacked Timer</h1>

      <div className="row m-0 p-0 input-group mb-3">
        <label className="input-group-text col-md-2 rounded-0" id="name-label" htmlFor="name-input">Name</label>
        <input type="text" className="form-control col-md-10 rounded-0" id="name-input" placeholder="Timer" aria-label="Name" aria-describedby="name-label" />
      </div>

      {timerCount.map(t => <div key={t} className="row m-0 p-0 input-group mb-3">
        <label className="input-group-text col-md-2 rounded-0" id={`hours-label${t}`} htmlFor={`hours-input${t}`}>Hours</label>
        <input type="number" className="form-control col-md-2 rounded-0" id={`hours-input${t}`} defaultValue="0" min="0" aria-label="Hours" aria-describedby={`hours-label${t}`} />
        <label className="input-group-text col-md-2 rounded-0" id={`minutes-label${t}`} htmlFor={`minutes-input${t}`}>Minutes</label>
        <input type="number" className="form-control col-md-2 rounded-0" id={`minutes-input${t}`} defaultValue="0" min="0" aria-label="Minutes" aria-describedby={`minutes-label${t}`} />
        <label className="input-group-text col-md-2 rounded-0" id={`seconds-label${t}`} htmlFor={`seconds-input${t}`}>Seconds</label>
        <input type="number" className="form-control col-md-2 rounded-0" id={`seconds-input${t}`} defaultValue="0" min="0" aria-label="Seconds" aria-describedby={`seconds-label${t}`} />
        {t > 2 && <input
          type="button"
          className="btn text-danger position-absolute"
          value="X"
          style={{ width: '1rem', right: '-28px' }}
          title="Delete row"
          onClick={() => deleteTimerRow(t)}
        />}
      </div>)}

      <input
        type="button"
        value="Add new row"
        className="btn btn-primary btn-block mb-1 rounded-0"
        onClick={addNewTimerRow}
      />
      <button className="btn btn-primary btn-block mb-5 rounded-0">Done</button>
    </form>
  )
}

export default CustomStackedTimer;
