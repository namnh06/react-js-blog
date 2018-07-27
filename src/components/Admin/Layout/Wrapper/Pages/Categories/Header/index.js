import React from 'react';
import './styles.css';
const Header = props => {
  return (
    <li className="Categories-Content Categories-Content__Header d-flex flex-row justify-content-around border">
      <div>#</div>
      <div>Name</div>
      <div>Action</div>
    </li>
  );
};

export default Header;
