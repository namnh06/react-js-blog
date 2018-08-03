import React, { Fragment } from 'react';
import Button from '../../../../../../../UI/Button';
const index = props => {
  return (
    <Fragment>
      <div className="font-weight-bold">{props.index}</div>
      <div className="d-flex justify-content-start">
        <span className="px-2">{props.name}</span>
      </div>
      <div className="d-flex justify-content-around">
        <Button
          className="btn btn-sm btn-warning"
          clicked={props.onButtonEditClicked}
        >
          edit
        </Button>
        <Button
          className="btn btn-sm btn-danger"
          clicked={props.onButtonDeleteClicked}
        >
          delete
        </Button>
      </div>
    </Fragment>
  );
};

export default index;
