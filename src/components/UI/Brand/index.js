import React, { Fragment } from 'react';
import Picture from '../../Details/Picture';
import { logoImage } from '../../../helpers';
import { Link } from 'react-router-dom';
const index = props => {
  return (
    <Fragment>
      <Link to="/home" className="Client__Brand__anchor w-100">
        <div className="d-flex justify-content-center py-3">
          <Picture
            className={['Client__Brand__img--height align-self-center'].join(
              ' '
            )}
            src={logoImage()}
          />
          <div className="d-flex flex-column ml-3 justify-content-center w-100">
            {/* <h1
              className={[
                'font-italic font-weight-bold text-uppercase mb-0',
                props.textColor,
                props.isScroll && 'd-none'
              ].join(' ')}
            >
              <span>{props.slogan}</span>
            </h1> */}

            <h1 className={props.textColor}>{props.link}</h1>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default index;
