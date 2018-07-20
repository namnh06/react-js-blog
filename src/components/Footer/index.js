import React from 'react';
import footerImage from '../../assets/images/footer/footer_slide-1.png';
import './styles.css';

import Brand from '../UI/Brand';
const index = () => {
  return (
    <div className="container-fluid Footer p-0">
      <div
        className="d-flex flex-row Footer__background-image align-items-center"
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        <div className="col-6 d-flex flex-column ">
          <h1 className="text-yellow-cz-custom text-uppercase text-right">
            Crashzone
          </h1>
          <p className="text-white text-uppercase text-right">
            The first free web based quoting system for smash repairers.
          </p>
        </div>
        <div className="col-6">
          <button className="btn btn-lg bg-yellow-cz-custom rounded-0 text-uppercase">
            sign up now
          </button>
          <p className="text-white text-uppercase mt-2">
            Only take a few seconds !
          </p>
        </div>
      </div>
      <div className="d-flex flex-row bg-dark">
        <div className="col-5 pl-5 py-3">
          <div className="d-flex mb-3">
            <Brand
              link="www.crashzone.com.au"
              slogan="it's free"
              textColor="text-white"
            />
          </div>

          <p className="text-white">
            Crashzone the first free web based quoting system for smash
            repairers.
          </p>
          <button className="btn btn-lg rounded-0 bg-yellow-cz-custom btn-outline-dark text-uppercase">
            learn more
          </button>
        </div>
        <div className="col-5 py-3 Footer__contact">
          <p>
            <i className="fas fa-home">&nbsp;&#x02010;&nbsp;</i>
            <span className="">P.O Box 4 - North Sydney - NSW 2060</span>
          </p>
          <p>
            <i className="fas fa-address-book">&nbsp;&#x02010;&nbsp;</i>
            <span>ABN: 63125055996</span>
          </p>
          <p>
            <i className="fas fa-phone">&nbsp;&#x02010;&nbsp;</i>
            <span>02 9011 6647</span>
          </p>
          <p>
            <i className="fas fa-envelope">&nbsp;&#x02010;&nbsp;</i>
            <a href="" className="text-white">
              support@crashzone.com.au
            </a>
          </p>
          <p>
            <i className="fas fa-clock">&nbsp;&#x02010;&nbsp;</i>
            <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
          </p>
        </div>
        <div className="col-2 py-3 text-white Footer__social-network">
          <i className="fab fa-facebook-square fa-3x" />
          <i className="fab fa-twitter-square fa-3x" />
        </div>
      </div>
      <div className="d-flex flex-row bg-secondary">
        <div className="col-12">
          <p className="text-center text-uppercase pt-2 text-white">
            COPYRIGHT 2018 CRASHZONE IT'S FREE | ALL RIGHTS RESERVED | POWERED
            BY&nbsp;
            <a href="pageworth.com" className="text-warning">
              PAGEWORTH
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
