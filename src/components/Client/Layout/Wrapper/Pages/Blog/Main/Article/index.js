import React from 'react';
import Moment from 'react-moment';
import LinkToArticle from '../../../../../../../UI/LinkToArticle';
import TextTruncate from 'react-text-truncate';
import Category from './Category';
import { Link, NavLink } from 'react-router-dom';
import { imageFallBack } from '../../../../../../../../helpers/image';
import { HOST, DOMAIN } from '../../../../../../../../helpers/constants';
const index = props => {
  const converHTMLToText = html => {
    return html.replace(/(<([^>]+)>)/gi, '').replace(/\s{2,}/, '');
  };
  return (
    <div className="card mb-3 border-top-0 border-bottom border-right-0 border-left-0 ">
      <div className="card-body">
        <LinkToArticle slug={props.slug} className="text-muted">
          <h1 className="text-uppercase font-weight-bold text-dark">
            {props.title}
          </h1>
        </LinkToArticle>

        <div className="mb-2">
          <small className="d-inline text-muted font-italic">
            By <span className="text-capitalize">{props.author.name}</span> on{' '}
            <Moment date={props.updated_at} format="DD/MM/YYYY" />
          </small>
        </div>

        <div>
          <img src={imageFallBack(props.images)} width="50%" alt="" />
        </div>
        <div
          className="card-text Text--font-lato font-weight-light Client__Article__HTML mt-2"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          <TextTruncate
            text={converHTMLToText(props.content)}
            line={10}
            truncateText="…"
            textTruncateChild={
              <a href={`${DOMAIN}/blog/posts/${props.slug}`}>Read more</a>
            }
          />
        </div>
        <div className="h5 mt-2">
          <div className="d-flex">
            Categories :&nbsp;
            {props.categories.map((category, index) => {
              return (
                <Category
                  key={index}
                  index={index + 1}
                  last={props.categories.length === index + 1}
                  {...category}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
