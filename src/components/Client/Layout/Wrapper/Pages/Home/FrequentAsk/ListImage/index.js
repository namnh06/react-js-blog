import React from 'react';

const index = props => {
  return (
    <li className="nav-item my-2">
      <a href={props.link} target="_blank">
        <img src={props.link} alt="" />
      </a>
    </li>
  );
};

export default index;
