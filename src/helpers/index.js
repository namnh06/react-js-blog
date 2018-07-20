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

export const childrenOfListHeader = (type, { name, url }) => {
  switch (type) {
    case 'button':
      return (
        <Button className="btn btn-outline-dark bg-yellow-cz-custom rounded-0 text-dark text-uppercase">
          {name}
        </Button>
      );
    case 'anchor':
      return url === 'forums' ? (
        <a
          href="http://www.crashzone.com.au/forum/viewforum.php?f=2"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-dark"
        >
          {name}
        </a>
      ) : (
        <Anchor href={url} className="nav-link text-dark">
          {name}
        </Anchor>
      );
    default:
      return null;
  }
};

export const convertStringToUrl = string => {
  return string.replace(' ', '-').toLowerCase();
};
