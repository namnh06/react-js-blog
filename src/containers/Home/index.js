import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Layout/Header';
import Carousel from '../../components/Carousel';
import './styles.css';

import Ribbon from '../../components/Layout/Ribbon';
import Feature from '../../components/Layout/Feature';
import Footer from '../../components/Layout/Footer';
import Posts from '../../components/Content/Home/Posts';
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
        <Posts />
        <Feature />
        <Footer />
      </Fragment>
    );
  }
}

export default connect()(index);
