import React, { Fragment } from 'react';
import moment from 'moment';

import Breadcrumb from '../../../../../../UI/Breadcrumb';
import { DOMAIN } from '../../../../../../../helpers/constants';
const index = props => {
  return (
    <Fragment>
      <Breadcrumb data={['blog', 'post']} />
      <h1 className="text-uppercase font-weight-bold">{props.title}</h1>
      <div>
        <small className="d-inline text-muted font-italic">
          By {props.author.name} on {moment(props.updated_at).format('LLLL')}
        </small>
      </div>
      <p className="text-muted font-italic">{props.description}</p>

      <div
        className="Client__Post__Article Client__Post__Article--font-family d-flex flex-column"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
      <div className="mt-auto border-top d-flex justify-content-between">
        <a
          className={[
            'btn btn-link ',
            !!props.previous_slug ? '' : 'disabled'
          ].join('')}
          href={`${DOMAIN}/blog/posts/${props.previous_slug}`}
        >
          &lt;&nbsp;Previous
        </a>
        <a
          className={[
            'btn btn-link ',
            !!props.next_slug ? '' : 'disabled'
          ].join('')}
          href={`${DOMAIN}/blog/posts/${props.next_slug}`}
        >
          Next&nbsp;&gt;
        </a>
      </div>
    </Fragment>
  );
};

export default index;
