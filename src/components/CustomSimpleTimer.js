import React from 'react';
import secondsToTime from '../utils/secondsToTime';

const CustomSimpleTimer = ({ setButtons }) => {
  const handleCustomSimpleFormSubmit = e => {
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
    <form
      className="row mt-5"
      onSubmit={handleCustomSimpleFormSubmit}
    >
      <h1 className="p-0 mb-4">Add a Custom Simple Timer</h1>
      <div className="row m-0 p-0 input-group mb-3">
        <label className="input-group-text col-md-2 rounded-0" id="name-label" htmlFor="name-input">Name</label>
        <input type="text" className="form-control col-md-10 rounded-0" id="name-input" placeholder="Timer" aria-label="Name" aria-describedby="name-label" />
      </div>
      <div className="row m-0 p-0 input-group mb-3">
        <label className="input-group-text col-md-2 rounded-0" id="hours-label" htmlFor="hours-input">Hours</label>
        <input type="number" className="form-control col-md-2 rounded-0" id="hours-input" defaultValue="0" min="0" aria-label="Hours" aria-describedby="hours-label" />
        <label className="input-group-text col-md-2 rounded-0" id="minutes-label" htmlFor="minutes-input">Minutes</label>
        <input type="number" className="form-control col-md-2 rounded-0" id="minutes-input" defaultValue="0" min="0" aria-label="Minutes" aria-describedby="minutes-label" />
        <label className="input-group-text col-md-2 rounded-0" id="seconds-label" htmlFor="seconds-input">Seconds</label>
        <input type="number" className="form-control col-md-2 rounded-0" id="seconds-input" defaultValue="0" min="0" aria-label="Seconds" aria-describedby="seconds-label" />
      </div>
      <button className="btn btn-primary btn-block mb-5 rounded-0">Add</button>
    </form>
  )
}

export default CustomSimpleTimer;
