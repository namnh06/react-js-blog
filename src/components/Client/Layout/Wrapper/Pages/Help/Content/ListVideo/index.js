import React from 'react';

const index = props => {
  return (
    <li className="nav-item">
      <a className="nav-link text-capitalize" href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

export default index;
