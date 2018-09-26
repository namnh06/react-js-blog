import React from 'react';
import ReactTooltip from 'react-tooltip';

import TextTruncate from 'react-text-truncate';

import { logoImage, hrefArticle } from '../../../../helpers';
import LinkToArticle from '../../../UI/LinkToArticle';
import { HOST, DOMAIN } from '../../../../helpers/constants';
const index = props => {
  const imageStyle = {
    backgroundImage: `url(${(!!props.images[0] &&
      `${HOST + props.images[0].path}`) ||
      logoImage()})`
  };

  return (
    <div className="card">
      <LinkToArticle slug={props.slug}>
        <div
          className="Client__Article__Preview-Image card-img-top p-3"
          style={imageStyle}
        />
      </LinkToArticle>
      <div className="card-body border-top d-flex flex-column justify-content-between">
        <h2 className="card-title ">
          <span data-tip={props.title} data-delay-show={1000}>
            <a href={hrefArticle(props.slug)} className="text-dark">
              {props.title}
            </a>
          </span>
          <ReactTooltip />
        </h2>

        <div className="card-text pt-3 border-top">
          <TextTruncate
            text={props.description}
            line={1}
            truncateText="…"
            textTruncateChild={
              <a href={`${DOMAIN}/blog/posts/${props.slug}`}>Read more</a>
            }
          />
        </div>

        <ReactTooltip />
      </div>
    </div>
  );
};

export default index;
