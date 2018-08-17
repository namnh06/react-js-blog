import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../../helpers/axios.config';

import withErrorHandler from '../../../hoc/withErrorHandler';

import { postsFetchStart } from '../../../store/actions/posts.action';

import Layout from '../../../components/Admin/Layout';
import { ADMIN_PAGES_NAME } from '../../../helpers/constants';
// import './styles.css';
class index extends Component {
  componentDidMount() {
    this.props.postsFetchStart(true);
  }

  render() {
    return (
      <Fragment>
        <Layout page={ADMIN_PAGES_NAME.POSTS} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postsFetchStart: auth => dispatch(postsFetchStart(auth))
});

export default connect(
  null,
  mapDispatchToProps
)(withErrorHandler(index, axios));
