import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../../helpers/axios.config';

import withErrorHandler from '../../../hoc/withErrorHandler';

import Layout from '../../../components/Admin/Layout';
import { ADMIN_PAGES_NAME } from '../../../helpers/constants';
import { slidesFetchStart } from '../../../store/actions/slides.action';
// import './styles.css';
class index extends Component {
  componentDidMount() {
    this.props.slidesFetchStart();
  }

  render() {
    return (
      <Fragment>
        <Layout page={ADMIN_PAGES_NAME.CAROUSEL} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // posts: state.posts.current.data
  };
};

const mapDispatchToProps = dispatch => ({
  slidesFetchStart: _ => dispatch(slidesFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(index, axios));
