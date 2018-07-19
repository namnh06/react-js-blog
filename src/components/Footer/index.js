import React from 'react';
import footerImage from '../../assets/images/footer/footer_slide-1.png';
import './styles.css';
import { logoImage } from '../../helpers';
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
        <div className="col-lg-5 col-md-5 col-sm-6 logo-footer">
          <img src={logoImage()} width="150" alt="" />
          <p>
            Crashzone the first free web based quoting system for smash
            repairers.
          </p>
          <button className="btn btn-learn_more text-uppercase">
            {' '}
            learn more
          </button>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-6 address-footer">
          <i className="fas fa-home">&nbsp;</i>
          <span>P.O Box 4 - North Sydney - NSW 2060</span>
          <br />
          <i className="fas fa-address-book">&nbsp;</i>
          <span>ABN: 63125055996</span>
          <br />
          <i className="fas fa-phone">&nbsp;</i>
          <span>02 9011 6647</span>
          <br />
          <i className="fas fa-envelope">&nbsp;</i>
          <a href="#">support@crashzone.com.au</a>
          <br />
          <i className="fas fa-clock">&nbsp;</i>
          <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
          <br />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 social-footer">
          <i className="fab fa-facebook-square" />
          <i className="fab fa-twitter-square" />
        </div>
      </div>
      <div className="d-flex flex-row bg-secondary">
        <div className="copyright-footer col-12">
          <p className="text-center text-uppercase">
            COPYRIGHT 2017 CRASHZONE IT'S FREE | ALL RIGHTS RESERVED | POWERED
            BY
            <a href="#">PAGEWORTH</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
