import React from 'react';

const index = props => {
  return (
    <div className="form-check form-check-inline mx-2">
      <input
        className="form-check-input"
        type="checkbox"
        id={`js-checkbox-${props.children}`}
        value={props.id}
        onChange={props.onCheckBoxClicked}
      />
      <label
        className="form-check-label"
        htmlFor={`js-checkbox-${props.children}`}
      >
        {props.children}
      </label>
    </div>
  );
};

export default index;
