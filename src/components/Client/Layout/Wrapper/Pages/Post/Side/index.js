import React, { Fragment } from 'react';
import Categories from '../../Blog/Side/Categories';
const index = props => {
  console.log(props);
  return (
    <Fragment>
      {props.categories && <Categories postCategories={props.categories} />}
    </Fragment>
  );
};

export default index;
