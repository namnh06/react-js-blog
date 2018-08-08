import React from 'react';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
import { logoImage } from '../../../../../../../../helpers';
import LinkToArticle from '../../../../../../../UI/LinkToArticle';
const index = props => {
  return (
    <div className="card w-100 mb-2">
      <img
        className="card-img-top p-3"
        src={
          (props.images[0] && `http://localhost:6699${props.images[0].path}`) ||
          logoImage()
        }
        alt={props.slug}
      />

      <div className="card-body border-top">
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
        <small className="text-muted d-flex flex-column">
          <b>{props.author.name}</b>
          <span>{moment(props.created_at).format('ll')}</span>
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
