import React from 'react';

import Button from '../../../Details/Button';

const index = props => {
  console.log(props);
  return (
    <div
      className="container-fluid Client__Banner Client__Banner__Image"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(' +
          props.bannerImage +
          ')'
      }}
    >
      <div className="row h-100">
        <div className="col-12 h-100">
          <div className="Client__Banner__Text h-100 d-flex flex-column align-items-center justify-content-center">
            <div>
              <h1 className="text-uppercase text-white font-weight-bold display-4">
                {props.title}
              </h1>
              <small className="text-uppercase text-white">
                THE FIRST FREE WEB BASED QUOTING SYSTEM FOR SMASH REPAIRERS
              </small>
              <br />
              <Button
                clicked={props.onButtonSignUpClicked}
                className="btn btn-outline-dark bg-yellow-cz-custom rounded-0 text-dark text-uppercase mt-3 font-weight-bold"
              >
                sign up now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
