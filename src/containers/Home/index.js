import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import './styles.css';

import Ribbon from '../../components/Ribbon';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';
import Articles from '../../components/Content/Home/Articles';
class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Carousel />
        <Ribbon />
        <Articles />
        <Feature />
        <Footer />
      </Fragment>
    );
  }
}

export default connect()(index);
