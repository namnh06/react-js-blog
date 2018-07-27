import React from 'react';

import Button from '../../../../../../../UI/Button';
import './styles.css';
const index = props => {
  return (
    <li className="Admin-Posts-Content d-flex flex-row justify-content-around border border-top-0 ">
      <div>{props.index}</div>
      <div className="d-flex justify-content-start">
        <span className="px-2">{props.title}</span>
      </div>
      <div className="text-truncate justify-content-start">
        <span className="px-2">{props.description}</span>
      </div>

      <div className="d-flex justify-content-around">
        <Button
          className="btn btn-sm btn-warning"
          clicked={props.onEditButtonClicked}
        >
          edit
        </Button>
        <Button
          className="btn btn-sm btn-danger"
          clicked={id => props.deleteButton(props.id)}
        >
          delete
        </Button>
      </div>
    </li>
  );
};

export default index;
