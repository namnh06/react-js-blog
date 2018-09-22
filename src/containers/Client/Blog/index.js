import React, { Component } from 'react';

import ClientLayout from '../../../components/Client/Layout';

class index extends Component {
  render() {
    return (
      <ClientLayout
        page="blog"
        pageNumber={this.props.match.params.page || 1}
      />
    );
  }
}

export default index;
