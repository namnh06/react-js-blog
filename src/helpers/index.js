import React from 'react';
import logo from '../assets/images/crashzone-logo.svg';
import Anchor from '../components/Details/Anchor';
import Button from '../components/Details/Button';

export const logoImage = () => {
  return logo;
};

export const setDataToObject = data => {
  return { ...data };
};

export const setDataToArray = data => {
  return [...data];
};

export const addDataToArray = (oldArray, newData) => {
  return [...oldArray, newData];
};

export const removeDataFromArrayById = (array, id) => {
  return array.filter(object => object.id !== id);
};

export const updateDataToArrayById = (array, data) => {
  return array.map(item => {
    if (item.id !== data.id) {
      return item;
    }

    return {
      ...item,
      ...data
    };
  });
};

export const childrenOfListHeader = (type, { name, slug, isScroll }) => {
  switch (type) {
    case 'button':
      return (
        <Button
          className={[
            'btn btn-outline-dark rounded-0 text-uppercase',
            isScroll ? 'btn-sm' : 'btn-lg'
          ].join(' ')}
        >
          {name}
        </Button>
      );
    case 'anchor':
      return slug === 'forums' ? (
        <a
          href="http://www.crashzone.com.au/forum/viewforum.php?f=2"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-dark"
        >
          {name}
        </a>
      ) : (
        <Anchor href={slug} className="nav-link text-dark">
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
