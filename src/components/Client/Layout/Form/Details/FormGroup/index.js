import React from 'react';

const index = props => {
  return (
    <div
      className={[
        'form-group d-flex flex-column justify-content-around mb-0',
        props.className
      ].join(' ')}
    >
      {props.children}
    </div>
  );
};

export default index;
