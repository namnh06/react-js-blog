import React from 'react';

const index = props => {
  return (
    <div className="container my-5">
      <div className="d-flex flex-row">
        <div className="col-12">
          <h2>{props.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
      </div>
    </div>
  );
};

export default index;
