import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../../helpers/axios.config';

import withErrorHandler from '../../../hoc/withErrorHandler';

import { postsFetchStart } from '../../../store/actions/posts.action';

import Layout from '../../../components/Admin/Layout';
// import './styles.css';
class index extends Component {
  componentDidMount() {
    this.props.postsFetchStart();
  }

  render() {
    return (
      <Fragment>
        <Layout page="posts" />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postsFetchStart: () => dispatch(postsFetchStart())
});

export default connect(
  null,
  mapDispatchToProps
)(withErrorHandler(index, axios));
