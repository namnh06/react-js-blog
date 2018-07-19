import React from 'react';
import logo from '../assets/images/crashzone-logo.svg';
import Anchor from '../components/Details/Anchor';
import Button from '../components/Details/Button';

export const logoImage = () => {
  return logo;
};

export const setDataToArray = data => {
  return [...data];
};

export const childrenOfListHeader = (type, name) => {
  switch (type) {
    case 'button':
      return (
        <Button className="btn btn-outline-dark bg-yellow-cz-custom rounded-0 text-dark text-uppercase">
          {name}
        </Button>
      );
    case 'anchor':
      return <Anchor className="nav-link text-dark">{name}</Anchor>;
    default:
      return null;
  }
};
