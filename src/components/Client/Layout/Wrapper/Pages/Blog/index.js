import React, { Fragment } from 'react';

import Main from './Main';
import Side from './Side';

const index = props => {
  return (
    <Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col-8">
            <Main categorySlug={props.categorySlug} />
          </div>
          <div className="col-4">
            <Side onButtonSignUpClicked={props.onButtonSignUpClicked} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
