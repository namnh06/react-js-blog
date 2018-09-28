import React from 'react';
import { HOST } from '../../../../../../../../helpers/constants';

const index = props => {
  return (
    <li className="d-flex justify-content-between my-2">
      <div>{`#${props.index}`}</div>
      <div>{props.name}</div>
      <div>{props.caption}</div>
      <img
        className="w-25 h-100"
        src={HOST + props.image[0].path}
        alt=""
        width="50%"
        height="auto"
      />
    </li>
  );
};

export default index;
