import React, { Fragment } from 'react';

import Wrapper from './Wrapper';
import Header from './Header';
import Footer from './Footer';
class index extends React.Component {
  state = {
    isScroll: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler = event => {
    console.log('object');
    const top = window.scrollY;
    top > 100 &&
      !this.state.isScroll &&
      this.setState(prevState => ({
        isScroll: true
      }));

    top < 100 &&
      this.state.isScroll &&
      this.setState({
        isScroll: false
      });
  };

  render() {
    return (
      <Fragment>
        <Header isScroll={this.state.isScroll} />
        <Wrapper {...this.props} />
        <Footer />
      </Fragment>
    );
  }
}

export default index;
