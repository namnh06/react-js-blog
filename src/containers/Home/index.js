import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import './styles.css';

import Ribbon from '../../components/Ribbon';
import News from '../../components/News';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';
class index extends Component {
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
  render() {
    return (
      <Fragment>
        <Header scroll={this.state.isScroll} />
        <Carousel />
        <Ribbon />
        <News />
        <Feature />
        <Footer />
      </Fragment>
    );
  }
}

export default connect()(index);
