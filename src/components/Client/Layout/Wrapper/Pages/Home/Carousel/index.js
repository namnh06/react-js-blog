import React, { Component, Fragment } from 'react';

import Button from '../../../../../../Details/Button';
import Slide from './Slide';
import { connect } from 'react-redux';

import { HashLink as Link } from 'react-router-hash-link';

import { HOST } from '../../../../../../../helpers/constants';
class index extends Component {
  state = {
    slides: []
  };
  componentDidMount() {}

  render() {
    return (
      <div
        className={['d-none d-md-block container-fluid p-0 Carousel '].join(
          ' '
        )}
      >
        <div className="d-flex flex-row h-100">
          <div className="col-12 p-0">
            <div
              id="bs4-slide-carousel"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol className="carousel-indicators Carousel-incaditors">
                {!!this.props.slides.length &&
                  this.props.slides.slice(0, 3).map((slide, index) => {
                    return (
                      <li
                        key={index}
                        data-target="#bs4-slide-carousel"
                        data-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        {...slide}
                      />
                    );
                  })}
              </ol>
              <div className="carousel-inner">
                <div className="Carousel-content d-flex flex-row justify-content-center w-100">
                  <div className="d-flex flex-column">
                    <h1 className="text-yellow-cz-custom text-uppercase font-weight-bold text-center">
                      crashzone
                    </h1>
                    <h4 className="text-white font-weight-bold text-uppercase text-center mb-4">
                      the first free web based quoting system for smash
                      repairers
                    </h4>
                    <div className="d-flex flex-row justify-content-center">
                      <Link
                        to="/home#learn-more"
                        className="btn btn-lg text-uppercase btn-outline-light text-white mx-2 rounded-0 px-3 Carousel__button--learn-more"
                      >
                        learn more
                      </Link>
                      <Button
                        className="btn btn-lg btn-outline-dark text-uppercase bg-yellow-cz-custom mx-2 rounded-0 px-3 Carousel__button--sign-up"
                        clicked={this.props.onButtonSignUpClicked}
                      >
                        sign up
                      </Button>
                    </div>
                  </div>
                </div>
                {!!this.props.slides.length && (
                  <Fragment>
                    {this.props.slides.slice(0, 3).map((slide, index) => {
                      return (
                        <Slide
                          active={index === 0}
                          key={index}
                          url={`url(${HOST + slide.images[0].path})`}
                          {...slide}
                        />
                      );
                    })}
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    slides: state.slides.show
  };
};

export default connect(mapStateToProps)(index);
