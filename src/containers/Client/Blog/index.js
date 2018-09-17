import React, { Component } from 'react';

import ClientLayout from '../../../components/Client/Layout';

class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
