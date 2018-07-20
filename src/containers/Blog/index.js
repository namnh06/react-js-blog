import React, { Component, Fragment } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import bannerImage from '../../assets/images/blog/MenuBanners_Pricing-1920x580.jpg';
import Banner from '../../components/Banner';
import ContentBlog from '../../components/ContentBlog';
class index extends Component {
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
