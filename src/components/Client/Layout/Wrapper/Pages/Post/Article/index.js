import React, { Fragment } from 'react';
import moment from 'moment';
import {
  DEVELOPMENT_API_DOMAIN,
  DEVELOPMENT_DOMAIN
} from '../../../../../../../helpers/constants';
import {
  logoImage,
  fontAwesomeType,
  iconClass
} from '../../../../../../../helpers';
import Icon from '../../../../../../UI/Icon';

const index = props => {
  console.log(props);
  const urlImage = _ => {
    return (
      (props.images[0] && DEVELOPMENT_API_DOMAIN + props.images[0].path) ||
      DEVELOPMENT_DOMAIN + logoImage()
    );
  };
  return (
    <Fragment>
      {/* <Breadcrumb data={['blog', props.title]} /> */}
      <h1 className="text-uppercase font-weight-bold">{props.title}</h1>
      <div>
        <small className="d-inline text-muted font-italic">
          By {props.author.name} on {moment(props.updated_at).format('LLLL')}
        </small>
      </div>

      <p className="text-muted font-italic">{props.description}</p>

      {props.images[0] && (
        <Fragment>
          <figure className="figure">
            <img
              src={urlImage()}
              className="figure-img rounded-0 my-auto w-100"
              alt={props.images[0].alt}
            />
            <figcaption className="figure-caption text-truncate text-center mt-auto">
              {props.images[0].name}
            </figcaption>
          </figure>
        </Fragment>
      )}

      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </Fragment>
  );
};

export default index;
