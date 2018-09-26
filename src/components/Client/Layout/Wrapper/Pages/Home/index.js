import React, { Fragment } from 'react';
import Carousel from './Carousel';
import Ribbon from './Ribbon';

import Articles from './Articles';
import Information from './Information';
import Register from './Register';
import FrequentAsk from './FrequentAsk';
import Network from './Network';

class index extends React.Component {
  state = {
    visited: '0'
  };
  componentDidMount() {
    if (!!localStorage.getItem('cz.visited')) {
      const visited = localStorage.getItem('cz.visited');
      this.setState({
        visited
      });
    }
  }
  render() {
    return (
      <Fragment>
        <div className="d-none d-lg-block">
          <Fragment>
            <Carousel
              onButtonSignUpClicked={this.props.onButtonSignUpClicked}
            />
            <Ribbon onButtonSignUpClicked={this.props.onButtonSignUpClicked} />
          </Fragment>
        </div>

        <Information />
        <FrequentAsk />
        <Register />

        <Network />

        <Articles />
      </Fragment>
    );
  }
}

export default index;
