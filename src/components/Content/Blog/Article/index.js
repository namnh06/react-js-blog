import React from 'react';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
const index = props => {
  return (
    <div className="card w-100 mb-2">
      <img className="card-img-top" src={props.images[0].link} alt="Card cap" />
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
          <a href={`blog/${props.slug}`} className="float-right tex-muted">
            Read More&nbsp;&raquo;
          </a>
        </small>
      </div>
    </div>
  );
};

export default index;
