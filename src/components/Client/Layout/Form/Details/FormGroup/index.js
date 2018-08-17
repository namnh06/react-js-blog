import React from 'react';

const index = props => {
  return (
    <div className="form-group d-flex flex-column justify-content-around mx-3 my-0 mt-1">
      {props.children}
    </div>
  );
};

export default index;
