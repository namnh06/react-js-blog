import React, { Fragment } from 'react';
import NavigatorBar from './NavigationBar';
import Wrapper from './Wrapper';
const index = props => {
  return (
    <Fragment>
      <NavigatorBar />
      <Wrapper page={props.page} />
    </Fragment>
  );
};

export default index;
