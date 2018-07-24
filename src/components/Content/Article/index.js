import React from 'react';
import Breadcrumb from '../../UI/Breadcrumb';
const index = props => {
  return (
    <div className="container my-5">
      <div className="d-flex flex-row">
        <div className="col-8">
          <Breadcrumb data={['home', props.slug]} />
          <h2>{props.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
        <div className="col-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb rounded-0">
              <li
                className="breadcrumb-item text-uppercase"
                aria-current="page"
              >
                Categories
              </li>
            </ol>
          </nav>
          <ul className="list-unstyled text-muted ml-2">
            <li>&raquo; Hello</li>
            <li>&raquo; Hello</li>
            <li>&raquo; Hello</li>
            <li>&raquo; Hello</li>
          </ul>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb rounded-0">
              <li
                className="breadcrumb-item text-uppercase"
                aria-current="page"
              >
                Recent Posts
              </li>
            </ol>
          </nav>
          <ul className="list-unstyled text-muted ml-2">
            <li>&raquo; Hello</li>
            <li>&raquo; Hello</li>
            <li>&raquo; Hello</li>
            <li>&raquo; Hello</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
