import React from 'react';
import { NavLink } from 'react-router-dom';
const index = props => {
  return (
    <NavLink
      className={props.className}
      to={`/${props.href || '#'}`}
      target={props.target}
      activeClassName="border border-dark"
    >
      {props.children}
    </NavLink>
  );
};

export default index;
