import React, { Fragment } from 'react';
import NavigatorBar from './NavigationBar';
import withErrorHandler from '../../../hoc/withErrorHandler';
import axios from '../../../helpers/axios.config';
import Wrapper from './Wrapper';

class index extends React.Component {
  render() {
    return (
      <Fragment>
        <NavigatorBar />
        <Wrapper {...this.props} />
      </Fragment>
    );
  }
}

export default withErrorHandler(index, axios);
