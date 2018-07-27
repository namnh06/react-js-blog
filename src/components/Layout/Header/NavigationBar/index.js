import React from 'react';
import { childrenOfListHeader } from '../../../../helpers';

const index = props => {
  return (
    <li
      className={props.className}
      style={{ fontSize: props.isScroll ? '1rem' : '1.5rem' }}
    >
      {childrenOfListHeader(props.type, props)}
    </li>
  );
};

export default index;
