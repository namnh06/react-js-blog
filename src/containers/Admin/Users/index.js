import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../../helpers/axios.config';

import withErrorHandler from '../../../hoc/withErrorHandler';
// import NavigationBar from '../../../components/NavigationBar';

// import Users from '../../../components/Admin/Pages/Users/';
import Layout from '../../../components/Admin/Layout';
import { usersFetchStart } from '../../../store/actions/admin/users.action';

import './styles.css';
class index extends Component {
  componentDidMount() {
    this.props.usersFetchStart();
  }

  render() {
    return (
      <Fragment>
        <Layout page="users" />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  usersFetchStart: () => dispatch(usersFetchStart())
});

export default connect(
  null,
  mapDispatchToProps
)(withErrorHandler(index, axios));
