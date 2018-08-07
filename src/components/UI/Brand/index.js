import React, { Fragment } from 'react';
import Picture from '../../Details/Picture';
import { logoImage } from '../../../helpers';
import { Link } from 'react-router-dom';
const index = props => {
  return (
    <Fragment>
      <Link to="/home" className="Navigation-Bar__brand__anchor w-100">
        <div className="d-flex">
          <Picture
            className={[
              'Navigation-Bar__brand__img--width',
              props.isScroll ? 'Scroll--height' : ''
            ].join(' ')}
            src={logoImage()}
          />
          <div className="d-flex flex-column ml-3 justify-content-center w-100">
            <h1
              className={[
                'font-italic font-weight-bold text-uppercase mb-0',
                props.textColor,
                props.isScroll && 'd-none'
              ].join(' ')}
            >
              <span>{props.slogan}</span>
            </h1>

            <small className={props.textColor}>{props.link}</small>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default index;
