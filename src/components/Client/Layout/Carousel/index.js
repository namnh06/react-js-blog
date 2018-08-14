import React, { Component, Fragment } from 'react';
import first from '../../../../assets/images/slides/1-cz-first.jpg';
import second from '../../../../assets/images/slides/2-cz-second.jpg';
import third from '../../../../assets/images/slides/3-cz-third.jpg';
import fourth from '../../../../assets/images/slides/4-cz-fourth.png';
import fifth from '../../../../assets/images/slides/5-cz-fifth.png';
import sixth from '../../../../assets/images/slides/6-cz-sixth.png';
import seventh from '../../../../assets/images/slides/7-cz-seventh.png';
import eighth from '../../../../assets/images/slides/8-cz-eighth.png';
import ninth from '../../../../assets/images/slides/9-cz-ninth.png';
import tenth from '../../../../assets/images/slides/10-cz-tenth.png';
import eleventh from '../../../../assets/images/slides/11-cz-eleventh.png';
import twelveth from '../../../../assets/images/slides/12-cz-twelveth.png';
import thirteenth from '../../../../assets/images/slides/13-cz-thirteenth.png';
import fourteenth from '../../../../assets/images/slides/14-cz-fourteenth.png';
import fifteenth from '../../../../assets/images/slides/15-cz-fifteenth.png';
import sixteenth from '../../../../assets/images/slides/16-cz-sixteenth.png';

import Button from '../../../Details/Button';
import Slide from './Slide';
class index extends Component {
  state = {};
  componentDidMount() {
    const slides = [
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      ninth,
      tenth,
      eleventh,
      twelveth,
      thirteenth,
      fourteenth,
      fifteenth,
      sixteenth
    ];

    const arraySlide = [];
    for (let i = 0; i < slides.length / 3; i++) {
      const randNumber = Math.floor(Math.random() * slides.length);

      const slide = slides.splice(randNumber, 1);

      arraySlide.push(slide);
    }
    this.setState({
      slides: [...arraySlide]
    });
  }

  render() {
    return (
      <div className={['container-fluid p-0 Carousel'].join(' ')}>
        <div className="d-flex flex-row h-100">
          <div className="col-12 p-0">
            <div
              id="bs4-slide-carousel"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol className="carousel-indicators Carousel-incaditors">
                {this.state.slides &&
                  this.state.slides.map((key, index) => {
                    return (
                      <li
                        key={key}
                        data-target="#bs4-slide-carousel"
                        data-slide-to={index}
                        className={index === 0 ? 'active' : ''}
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
                      <Button className="btn btn-lg text-uppercase btn-outline-light text-white mx-2 rounded-0 px-3 Carousel__button--learn-more">
                        learn more
                      </Button>
                      <Button
                        className="btn btn-lg btn-outline-dark text-uppercase bg-yellow-cz-custom mx-2 rounded-0 px-3 Carousel__button--sign-up"
                        clicked={this.props.onButtonSignUpClicked}
                      >
                        sign up
                      </Button>
                    </div>
                  </div>
                </div>
                {this.state.slides && (
                  <Fragment>
                    {this.state.slides.map((key, index) => {
                      return (
                        <Slide
                          active={index === 0}
                          key={key}
                          url={`url(${this.state.slides[index]})`}
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

export default index;
