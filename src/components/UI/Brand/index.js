import React, { Fragment } from 'react';
import Picture from '../../Details/Picture';
import { logoImage } from '../../../helpers';
import { Link } from 'react-router-dom';
const index = props => {
  return (
    <Fragment>
      <Link to="/home" className="Navigation-Bar__brand__anchor">
        <div className="d-flex">
          <Picture
            className="Navigation-Bar__brand__img--width"
            src={logoImage()}
          />
          <h3
            className={[
              'font-italic font-weight-bold ml-3 text-uppercase',
              props.textColor
            ].join(' ')}
          >
            {props.slogan}
            <br />
            <small className="">{props.link}</small>
          </h3>
        </div>
      </Link>
    </Fragment>
  );
};

export default index;
