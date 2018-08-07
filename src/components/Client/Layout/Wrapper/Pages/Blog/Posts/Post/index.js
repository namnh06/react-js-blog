import React from 'react';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
import { logoImage } from '../../../../../../../../helpers';
import LinkToArticle from '../../../../../../../UI/LinkToArticle';
import { DEVELOPMENT_DOMAIN } from '../../../../../../../../helpers/constants';
const index = props => {
  return (
    <div className="card w-100 mb-2">
      <img
        className="card-img-top"
        src={
          (props.images[0] && DEVELOPMENT_DOMAIN + props.images[0].path) ||
          logoImage()
        }
        width="300"
        alt="Card cap"
      />

      <div className="card-body">
        <h2 className="card-title text-truncate">
          <span data-tip={props.title} data-delay-show={1000}>
            {props.title}
          </span>
          <ReactTooltip />
        </h2>
        <hr />
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <small className="text-muted">
          <b>{props.author.name}</b> - {moment(props.created_at).format('ll')}
        </small>
        <small>
          <LinkToArticle slug={props.slug} className="float-right tex-muted">
            Read More&nbsp;&raquo;
          </LinkToArticle>
        </small>
      </div>
    </div>
  );
};

export default index;
