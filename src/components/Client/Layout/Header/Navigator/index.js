import React from 'react';
import { childrenOfListHeader } from '../../../../../helpers';

const index = props => {
  return (
    <li
      className={[
        'nav-item my-2 my-lg-0 text-uppercase h3',
        props.className
      ].join(' ')}
    >
      {childrenOfListHeader(
        props.type,
        props,
        'nav-link p-2 text-white text-uppercase'
      )}
    </li>
  );
};

export default index;
