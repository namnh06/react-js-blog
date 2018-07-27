import React from 'react';

const index = props => {
  return (
    <input
      type={props.type}
      className={['rounded-0', props.className].join(' ')}
      placeholder={props.placeholder}
      required={props.required}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      autoFocus={props.autoFocus}
      readOnly={props.readOnly}
    />
  );
};

export default index;
