import React from 'react';

const index = props => {
  return (
    <a className={props.className} href={props.href || '#'}>
      {props.children}
    </a>
  );
};

export default index;
