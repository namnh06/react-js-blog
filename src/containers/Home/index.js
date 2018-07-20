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
  render() {
    return (
      <Fragment>
        <Header />
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
