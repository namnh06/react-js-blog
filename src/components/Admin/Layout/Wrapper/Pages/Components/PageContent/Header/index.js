import React from 'react';

const Header = props => {
  return (
    <li className="Admin-Posts-Content Admin-Posts-Content__Header d-flex flex-row justify-content-around border">
      <div>#</div>
      <div>Title</div>
      <div>Description</div>
      <div>Action</div>
    </li>
  );
};

export default Header;
