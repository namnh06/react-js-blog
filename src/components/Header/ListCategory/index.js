import React from 'react';
import { childrenOfListHeader } from '../../../helpers';

const index = props => {
  return (
    <li className={props.className}>
      {childrenOfListHeader(props.type, props.children)}
    </li>
  );
};

export default index;
