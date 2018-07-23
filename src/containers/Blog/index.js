import React, { Component, Fragment } from 'react';

import Banner from '../../components/Banner';
import ContentBlog from '../../components/Content/Blog';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import bannerImage from '../../assets/images/blog/MenuBanners_Pricing-1920x580.jpg';

class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Banner bannerImage={bannerImage} title="Blog" />
        <ContentBlog />
        <Footer />
      </Fragment>
    );
  }
}

export default index;
