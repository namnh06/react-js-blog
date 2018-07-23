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
            width={props.isScroll ? '40px' : ''}
          />
          <div className="d-flex flex-column ml-3 align-items-center">
            <h1
              className={[
                'font-italic font-weight-bold text-uppercase mb-0',
                props.textColor,
                props.isScroll && 'd-none'
              ].join(' ')}
            >
              <span>{props.slogan}</span>
            </h1>
            <div>
              <small className={props.textColor}>{props.link}</small>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default index;
