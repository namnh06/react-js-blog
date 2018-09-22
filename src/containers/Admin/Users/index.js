import React, { Component } from 'react';

import Layout from '../../../components/Admin/Layout';

class index extends Component {
  render() {
    return (
      <Layout page="users" pageNumber={this.props.match.params.page || 1} />
    );
  }
}

export default index;
