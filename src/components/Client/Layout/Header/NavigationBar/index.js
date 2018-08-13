import React from 'react';
import { childrenOfListHeader } from '../../../../../helpers';

const index = props => {
  return (
    <li className={['nav-item', props.className].join(' ')}>
      {childrenOfListHeader(props.type, props)}
    </li>
  );
};

export default index;
