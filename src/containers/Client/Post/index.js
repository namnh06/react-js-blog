import React, { Component, Fragment } from 'react';

import './styles.css';

import ClientLayout from '../../../components/Client/Layout';
import { CLIENT_PAGES_NAME } from '../../../helpers/constants';

class index extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <ClientLayout
          slug={this.props.match.params.slug}
          page={CLIENT_PAGES_NAME.POST}
        />
      </Fragment>
    );
  }
}

export default index;
