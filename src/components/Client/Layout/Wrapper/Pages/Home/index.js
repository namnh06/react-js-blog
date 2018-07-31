import React, { Fragment } from 'react';
import Carousel from '../../../Carousel';
import Ribbon from '../../../Ribbon';
import Feature from '../../../Feature';
import Articles from './Articles';
const index = () => {
  return (
    <Fragment>
      <Carousel />
      <Ribbon />
      <Articles />
      <Feature />
    </Fragment>
  );
};

export default index;
