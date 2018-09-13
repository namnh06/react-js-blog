import React from 'react';
// import './styles.css';
import Button from '../../../../../../Details/Button';
const index = props => {
  return (
    <div className="container-fluid bg-yellow-cz-custom ">
      <div className="row h-100">
        <div className="col-12 h-100">
          <h2 className="d-flex justify-content-center align-items-center h-100 my-5">
            Crashzone web based vehicle estimating made easy
          </h2>
          <Button
            className="btn btn-lg rounded-0 px-5 position-absolute Client__Ribbon__button font-weight-bold"
            clicked={props.onButtonSignUpClicked}
          >
            sign up now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default index;
