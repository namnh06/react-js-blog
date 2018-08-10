import React, { Fragment } from 'react';

import Wrapper from './Wrapper';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
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

  onButtonScrollTopClickHandler = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Fragment>
        <Header isScroll={this.state.isScroll} />
        <Wrapper
          {...this.props}
          isScroll={this.state.isScroll}
          className={[this.state.isScroll ? 'Scroll-padding-top' : '']}
        />
        <Footer />
        <ScrollTop clicked={_ => this.onButtonScrollTopClickHandler()} />
      </Fragment>
    );
  }
}

export default index;
