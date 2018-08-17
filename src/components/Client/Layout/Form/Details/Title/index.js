import React from 'react';

const index = props => {
  return (
    <div className="border-bottom py-1 px-5 d-flex align-content-center justify-content-center">
      <h2 className="text-uppercase">{props.children}</h2>
    </div>
  );
};

export default index;
