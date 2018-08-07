import React, { Fragment } from 'react';
import Categories from './Categories';
const index = props => {
  return (
    <Fragment>
      <Categories categories={props.categories} />
    </Fragment>
  );
};

export default index;
