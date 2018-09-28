import React from 'react';
import { connect } from 'react-redux';

import { imageBackground } from '../../../../../../../helpers/image';
const index = props => {
  return !!props.slides.length ? (
    <div
      style={props.slides[3] && imageBackground(props.slides[3].images)}
      className="container-fluid Client__Home__Information--background-image my-5 py-5"
      id="learn-more"
    >
      <div className="row py-5">
        <div className="col-6 offset-1 text-white Text--font-lato py-5">
          <div className="h1 text-capitalize display-3 text-center">
            The Crashzone System
          </div>
          <div className="text-justify">
            <p>
              <b>Crashzone</b> is a web based quoting system for Smash Repairers
              accessed by secure login using a user name and password (the same
              as internet banking).
            </p>
            <p>
              Being web based allows you to access Crashzone from any computer,
              laptop, note book or mobile device that has internet access. This
              allows you to use technology such as the Apple iPad, iPhone and
              Android devices. Fast and simple to use, writes quotes, add
              images, create tax and excess invoices, email and print your
              quote. Crashzone is accepted by all insurance companies.
            </p>

            <p>
              Crashzone has over 1000 users in Australia and New Zealand and
              combined our users are generating 250,000 + quotes with a value in
              excess of $500,000,000 (half a billion dollars) annually.
            </p>
          </div>
          <div className="h1 text-capitalize display-3 text-center">
            insurance integration
          </div>
          <div className="text-justify">
            <p>
              <b>Crashzone</b> is compaitable with all insurance companies and
              has integration with Audatex, PNET, ORM, NTAR, LTAR,
              AutoIntegrity, Estimage & ARNIE.
            </p>
            <p>
              There are no support fees or extra modules to buy, everything is
              included such as integration with Audatex, ORM, PNET,
              AutoIntegrity, ARNIE & Estimage.
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = state => {
  return {
    slides: state.slides.show
  };
};

export default connect(mapStateToProps)(index);
