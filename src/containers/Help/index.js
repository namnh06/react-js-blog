import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Video from '../../components/Video';
import HelpContent from '../../components/HelpContent';
import helpImage from '../../assets/images/help/help-1.jpg';
class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header />
        <Banner bannerImage={helpImage} title="help" />
        <Video />
        <HelpContent />
        <Footer />
      </div>
    );
  }
}

export default index;
