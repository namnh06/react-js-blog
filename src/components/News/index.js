import React from 'react';
import CarImage1 from '../../assets/images/news/ferrari-365.jpg';
import CarImage2 from '../../assets/images/news/mini-front-end.jpg';
import './styles.css';
const index = () => {
  return (
    <div className="container mt-5 News">
      <div className="d-flex flex-row">
        <div className="col-12">
          <h1 className="News__text w-100 text-center mb-4">Latest News</h1>
          <div className="card-deck ">
            <div className="card border-0  ">
              <img
                className="card-img-top News__image"
                src={CarImage1}
                alt="Card cap"
              />
              <div className="card-body border">
                <h5 className="card-title font-weight-bold">
                  Crashzone - How to setup estimate
                </h5>
                <h6 className="card-text text-muted"> September 25th, 2017</h6>
                <hr />
                <p className="card-text">
                  Process for setting up Estimage on Crashzone * Contact Stelvio
                  to download and install the Estimage program to your computer
                  * Please note Stelvio charge you a yearly support fee *
                  Estimage provides you with
                </p>
              </div>
            </div>
            <div className="card border-0  ">
              <img
                className="card-img-top News__image"
                src={CarImage2}
                alt="Card cap"
              />
              <div className="card-body border">
                <h5 className="card-title font-weight-bold">
                  Crashzone - How to setup estimate
                </h5>
                <h6 className="card-text text-muted"> September 25th, 2017</h6>
                <hr />
                <p className="card-text">
                  Process for setting up Estimage on Crashzone * Contact Stelvio
                  to download and install the Estimage program to your computer
                  * Please note Stelvio charge you a yearly support fee *
                  Estimage provides you with
                </p>
              </div>
            </div>
            <div className="card border-0  ">
              <img
                className="card-img-top News__image"
                src={CarImage1}
                alt="Card cap"
              />
              <div className="card-body border">
                <h5 className="card-title font-weight-bold">
                  Crashzone - How to setup estimate
                </h5>
                <h6 className="card-text text-muted"> September 25th, 2017</h6>
                <hr />
                <p className="card-text">
                  Process for setting up Estimage on Crashzone * Contact Stelvio
                  to download and install the Estimage program to your computer
                  * Please note Stelvio charge you a yearly support fee *
                  Estimage provides you with
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row mt-3">
        <div className="col-4 d-flex align-items-center">
          <div className="News__dash bg-dark w-100" />
        </div>
        <div className="col-4 d-flex justify-content-center">
          <button className="btn btn-lg btn-block btn-outline-dark rounded-0 bg-yellow-cz-custom text-uppercase">
            view all vehicle
          </button>
        </div>
        <div className="col-4 d-flex align-items-center">
          <div className="News__dash bg-dark w-100" />
        </div>
      </div>
    </div>
  );
};

export default index;
