import React from 'react';
import './styles.css';
const Header = props => {
  return (
    <li className="User-Content d-flex flex-row justify-content-around border">
      <div>#</div>
      <div>Name</div>
      <div>Email</div>
      <div>Action</div>
    </li>
  );
};

export default Header;
