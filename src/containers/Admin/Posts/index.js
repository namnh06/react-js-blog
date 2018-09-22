import React, { Component, Fragment } from 'react';

import Layout from '../../../components/Admin/Layout';
import { ADMIN_PAGES_NAME } from '../../../helpers/constants';

class index extends Component {
  render() {
    return (
      <Fragment>
        <Layout
          page={ADMIN_PAGES_NAME.POSTS}
          pageNumber={this.props.match.params.page || 1}
        />
      </Fragment>
    );
  }
}

export default index;
