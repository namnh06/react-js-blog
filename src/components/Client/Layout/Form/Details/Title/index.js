import React from 'react';

const index = props => {
  return (
    <div className="border-bottom py-3 d-flex align-content-center justify-content-center bg-dark text-light">
      <div className="h1 m-0 text-uppercase text-uppercase">
        {props.children}
      </div>
    </div>
  );
};

export default index;
