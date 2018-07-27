import React from 'react';

import './styles.css';
import Button from '../../../../../../UI/Button';
const index = props => {
  return (
    <li className="Categories-Content d-flex flex-row justify-content-around border border-top-0 ">
      <div>{props.index}</div>
      <div>{props.name}</div>
      <div className="d-flex justify-content-around">
        <Button
          className="btn btn-sm btn-warning"
          clicked={props.onEditButtonClicked}
        >
          edit
        </Button>
        <Button
          className="btn btn-sm btn-danger"
          clicked={id => props.deleteButton(props.id, props.parent_id)}
        >
          delete
        </Button>
      </div>
    </li>
  );
};

export default index;
