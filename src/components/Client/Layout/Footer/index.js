import React from 'react';
import footerImage from '../../../../assets/images/footer/footer_slide-1.png';

import Button from '../../../Details/Button';
import Brand from '../../../UI/Brand';
import { connect } from 'react-redux';
const index = props => {
  return (
    <div className="container-fluid Client__Footer p-0">
      <div
        className="d-flex flex-row Client__Footer__top--background-image align-items-center"
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        <div className="col-6 d-flex flex-column ">
          <h1 className="text-yellow-cz-custom text-uppercase text-right">
            {props.information[0].value}
          </h1>
          <p className="text-white text-uppercase text-right">
            {props.information[2].value}
          </p>
        </div>
        <div className="col-6">
          <Button
            className="btn btn-lg rounded-0 text-uppercase Client__Footer__top__button"
            clicked={props.onButtonSignUpClicked}
          >
            sign up now
          </Button>
          <p className="text-white text-uppercase mt-2">
            Only take a few seconds !
          </p>
        </div>
      </div>
      <div className="d-flex flex-row bg-dark Client__Footer__middle">
        <div className="d-none d-lg-block col-lg-5 pl-5 py-3">
          <div className="d-flex mb-3">
            <Brand
              link={props.information[1].value}
              slogan="it's free"
              textColor="text-white"
            />
          </div>
          <p className="text-white text-capitalize">
            {props.information[2].value}
          </p>
          <Button className="btn btn-lg rounded-0 text-uppercase Client__Footer__middle__button">
            learn more
          </Button>
        </div>
        <div className="col-8 col-lg-5 py-3 d-flex flex-column justify-content-between Client__Footer__contact">
          <div className="text-white">
            <i className="fas fa-home" />
            <span className="ml-1">
              &nbsp;&#x02010;&nbsp;
              {props.information[3].value}
            </span>
          </div>
          <div className="text-white">
            <i className="fas fa-address-book" />
            <span className="ml-1">
              &nbsp;&#x02010;&nbsp; ABN : {props.information[4].value}
            </span>
          </div>
          <div className="text-white">
            <i className="fas fa-phone" />
            <span className="ml-1">
              &nbsp;&#x02010;&nbsp;
              {props.information[5].value}
            </span>
          </div>
          <div className="text-white">
            <i className="fas fa-envelope" />
            <span className="ml-1">
              &nbsp;&#x02010;&nbsp;
              {props.information[6].value}
            </span>
          </div>
          <div className="text-white">
            <i className="fas fa-clock" />
            <span className="ml-1">
              &nbsp;&#x02010;&nbsp;
              {props.information[7].value}
            </span>
          </div>
        </div>
        <div className="col-4 col-lg-2 py-3 text-white Client__Footer__social-network">
          <i className="fab fa-facebook-square fa-3x" />
          <i className="fab fa-twitter-square fa-3x" />
        </div>
      </div>
      <div className="d-flex flex-row bg-secondary">
        <div className="col-12 d-flex justify-content-center">
          <small className="text-uppercase pt-2 text-white mb-2 Client__Footer__Text-Bottom">
            COPYRIGHT 2018 CRASHZONE IT'S FREE | ALL RIGHTS RESERVED | POWERED
            BY&nbsp;
            <a href="pageworth.com" className="text-warning">
              PAGEWORTH
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    information: state.information
  };
};

export default connect(mapStateToProps)(index);
