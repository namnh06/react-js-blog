import React, { Fragment } from 'react';

import Main from './Main';

const index = props => {
  return (
    <Fragment>
      <div className="container my-lg-5">
        <div className="row">
          <div className="col-12 col-lg-12">
            <Main
              pageNumber={props.pageNumber}
              categorySlug={props.categorySlug}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
