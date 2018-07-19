import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import './styles.css';
import { categoriesFetchStart } from '../../store/actions/category.action';
import Ribbon from '../../components/Ribbon';
import News from '../../components/News';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';
class index extends Component {
  componentDidMount() {
    this.props.categoriesFetchStart();
  }
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

const mapDispatchToProps = dispatch => ({
  categoriesFetchStart: () => dispatch(categoriesFetchStart())
});

export default connect(
  null,
  mapDispatchToProps
)(index);
