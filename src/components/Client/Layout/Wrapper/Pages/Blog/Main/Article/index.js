import React from 'react';
import Moment from 'react-moment';
import LinkToArticle from '../../../../../../../UI/LinkToArticle';
import Category from './Category';
const index = props => {
  return (
    <div className="card mb-3 border-top-0 border-bottom border-right-0 border-left-0">
      <div className="card-body">
        <LinkToArticle slug={props.slug} className="text-muted">
          <h1 className="text-uppercase font-weight-bold text-dark">
            {props.title}
          </h1>
        </LinkToArticle>

        <div>
          <small className="d-inline text-muted font-italic">
            By <span className="text-capitalize">{props.author.name}</span> on{' '}
            <Moment date={props.updated_at} format="DD/MM/YYYY" />
          </small>
        </div>
        <div
          className="card-text Client__Article__HTML mt-2"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
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
