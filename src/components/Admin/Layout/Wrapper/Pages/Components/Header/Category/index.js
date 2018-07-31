import React from 'react';

const index = props => {
  return (
    <li
      className={[
        'Categories-Content Categories-Content__Header d-flex flex-row justify-content-around border',
        props.className
      ].join(' ')}
    >
      <div>#</div>
      <div>Name</div>
      <div>Action</div>
    </li>
  );
};

export default index;
