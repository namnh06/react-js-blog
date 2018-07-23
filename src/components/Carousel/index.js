import React from 'react';
import firstSlide from '../../assets/images/slides/crashzone-slide-1.jpg';
import secondSlide from '../../assets/images/slides/crashzone-slide-2.jpg';
import thirdSlide from '../../assets/images/slides/crashzone-slide-3.jpg';
import Button from '../Details/Button';
import './styles.css';
const index = props => {
  return (
    <div className="container-fluid p-0 Carousel">
      <div className="d-flex flex-row h-100">
        <div className="col-12 p-0">
          <div
            id="bs4-slide-carousel"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators Carousel-incaditors">
              <li
                data-target="#bs4-slide-carousel"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#bs4-slide-carousel" data-slide-to="1" />
              <li data-target="#bs4-slide-carousel" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="Carousel-content d-flex flex-row justify-content-center w-100">
                <div className="d-flex flex-column">
                  <h1 className="text-yellow-cz-custom text-uppercase font-weight-bold text-center">
                    crashzone
                  </h1>
                  <h4 className="text-white font-weight-bold text-uppercase text-center mb-4">
                    the first free web based quoting system for smash repairers
                  </h4>
                  <div className="d-flex flex-row justify-content-center">
                    <Button className="btn btn-lg text-uppercase btn-outline-light text-white mx-2 rounded-0 px-3 Carousel__button--learn-more">
                      learn more
                    </Button>
                    <Button className="btn btn-lg btn-outline-dark text-uppercase bg-yellow-cz-custom mx-2 rounded-0 px-3 Carousel__button--sign-up">
                      sign up
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item active Carousel__image Carousel__image--height"
                style={{ backgroundImage: `url(${firstSlide})` }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h5>First Slide</h5>
                  <p>Something make sense</p>
                </div>
              </div>
              <div
                className="carousel-item Carousel__image Carousel__image--height"
                style={{ backgroundImage: `url(${secondSlide})` }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second Slide</h5>
                  <p>Something make sense</p>
                </div>
              </div>
              <div
                className="carousel-item Carousel__image Carousel__image--height"
                style={{ backgroundImage: `url(${thirdSlide})` }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third Slide</h5>
                  <p>Something make sense</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
