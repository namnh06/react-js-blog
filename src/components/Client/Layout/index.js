import React, { Fragment } from 'react';

import Wrapper from './Wrapper';
import Header from './Header';
import Footer from './Footer';
const index = props => {
  return (
    <Fragment>
      <Header />
      <Wrapper {...props} />
      <Footer />
    </Fragment>
  );
};

export default index;
