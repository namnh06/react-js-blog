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
    if (this.props.users.length === 0) {
      this.props.usersFetchStart();
    }
  }

  render() {
    return (
      <Fragment>
        <Layout page="users" />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.current
  };
};

const mapDispatchToProps = dispatch => ({
  usersFetchStart: () => dispatch(usersFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(index, axios));
