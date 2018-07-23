import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import contactImage from '../../assets/images/contact/MenuBanners_Contact-1920x580.jpg';
import ContactContent from '../../components/ContactContent';
class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header />
        <Banner bannerImage={contactImage} title="Contact" />
        <ContactContent />
        <Footer />
      </div>
    );
  }
}

export default index;
