import React from 'react';
import blogImage from '../../assets/images/blog/mini-front-end.jpg';

const index = () => {
  return (
    <div className="container my-5">
      <div className="d-flex flex-row">
        <div className="col-8">
          <div className="card-group">
            <div className="card">
              <img className="card-img-top" src={blogImage} alt="Card cap" />
              <div className="card-body">
                <h3 className="card-title">
                  Crashzone - How to setup estimage
                </h3>
                <hr />
                <p className="card-text">
                  Process for setting up Estimage on Crashzone * Contact Stelvio
                  to download and install the Estimage program to your computer
                  * Please note Stelvio charge you a yearly support fee *
                  Estimage provides you with a user name and password
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  <b>Winston</b> - September 25th, 2017
                </small>

                <a href="" className="float-right">
                  Read More
                  <i className="fas fa-angle-double-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="">
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Search..."
            />
          </div>
          <div className="">
            <h3>Tags</h3>
            <div className="d-flex justify-content-around">
              <a href="" className="badge badge-primary">
                Primary
              </a>
              <a href="" className="badge badge-secondary">
                Secondary
              </a>
              <a href="" className="badge badge-success">
                Success
              </a>
              <a href="" className="badge badge-primary">
                Primary
              </a>
              <a href="" className="badge badge-secondary">
                Secondary
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
