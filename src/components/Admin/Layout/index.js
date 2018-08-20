import React, { Fragment } from 'react';
import NavigatorBar from './NavigationBar';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';
import { informationFetchStart } from '../../../store/actions/information.action';
class index extends React.Component {
  render() {
    return (
      <Fragment>
        <NavigatorBar />
        <Wrapper {...this.props} page={this.props.page} />
      </Fragment>
    );
  }
}

export default index;
