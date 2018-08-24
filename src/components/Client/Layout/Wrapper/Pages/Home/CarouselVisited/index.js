import React, { Component } from 'react';
import SideLogin from '../../Blog/Side/Form/Login';

import Button from '../../../../../../Details/Button';

import { logoImage } from '../../../../../../../helpers';
import { threePartSlides } from '../../../../../../../helpers/image';
class index extends Component {
  state = {
    slides: []
  };
  componentDidMount() {
    const slides = [...threePartSlides()];
    this.setState({
      slides
    });
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-8 pr-0">
            {this.state.slides && (
              <img
                src={this.state.slides[0]}
                className="w-100 Image--filter"
                alt=""
              />
            )}
            <div className="Carousel__Visited--slogan">
              <h1 className="text-uppercase text-white font-weight-bold">
                Welcome back
              </h1>
              <small className="text-uppercase text-white">
                THE FIRST FREE WEB BASED QUOTING SYSTEM FOR SMASH REPAIRERS
              </small>
              <br />
              <Button
                className="btn btn-outline-dark bg-yellow-cz-custom rounded-0 text-dark text-uppercase mt-3 font-weight-bold"
                clicked={this.props.onButtonSignUpClicked}
              >
                sign in now
              </Button>
            </div>
          </div>

          <div className="col-4 d-flex flex-column align-items-center justify-content-between px-0">
            <SideLogin
              onButtonSignUpClicked={this.props.onButtonSignUpClicked}
            />
            <img src={logoImage()} alt="" className="self-align-center w-50" />
          </div>
        </div>
      </div>
    );
  }
}

export default index;
