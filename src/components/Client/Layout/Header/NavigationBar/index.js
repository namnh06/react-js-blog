import React from 'react';
import { childrenOfListHeader } from '../../../../../helpers';

const index = props => {
  return (
    <li className={['nav-item my-2 my-lg-0', props.className].join(' ')}>
      {childrenOfListHeader(props.type, props)}
    </li>
  );
};

export default index;
