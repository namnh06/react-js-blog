import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../../helpers/axios.config';

import withErrorHandler from '../../../hoc/withErrorHandler';

import { categoriesFetchStart } from '../../../store/actions/admin/categories.action';
import Layout from '../../../components/Admin/Layout';

class index extends Component {
  componentDidMount() {
    console.log('object');
    this.props.categoriesFetchStart();
  }

  render() {
    return (
      <Fragment>
        <Layout page="categories" />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoriesFetchStart: () => dispatch(categoriesFetchStart())
});

export default connect(
  null,
  mapDispatchToProps
)(withErrorHandler(index, axios));
