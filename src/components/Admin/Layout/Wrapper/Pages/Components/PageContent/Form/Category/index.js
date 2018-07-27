import React from 'react';

const index = props => {
  return (
    <form
      onSubmit={props.onSubmitHandler}
      className="Post-form border rounded-0 p-3 pb-0 m-3"
    />
  );
};

export default index;
