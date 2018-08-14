import React, { Fragment } from 'react';
import Carousel from '../../../Carousel';
import Ribbon from '../../../Ribbon';
import Feature from '../../../Feature';
import Articles from './Articles';
const index = props => {
  return (
    <Fragment>
      <Carousel
        onButtonSignUpClicked={props.onButtonSignUpClicked}
        isScroll={props.isScroll}
      />
      <Ribbon onButtonSignUpClicked={props.onButtonSignUpClicked} />
      <Articles />
      <Feature />
    </Fragment>
  );
};

export default index;
