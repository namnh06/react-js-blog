import React from 'react';

const index = () => {
  return (
    <div className="container-fluid Client__Register">
      {/* <LazyLoad height={200} offset={100}> */}
      <div className="container">
        <div className="row">
          <div className="col-6 text-white text-uppercase d-flex flex-column justify-content-center my-5">
            <div className="display-3 lead">easy to sign up</div>
            <div>only take a few seconds</div>
          </div>
          <div className="col-6 my-5 d-flex align-items-center justify-content-end">
            <form>
              <div className="row mb-5">
                <div className="col">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Name"
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control rounded-0"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col">
                  <input
                    type="password"
                    className="form-control rounded-0"
                    placeholder="Password"
                  />
                </div>
                <div className="col">
                  <input
                    type="password"
                    className="form-control rounded-0"
                    placeholder="Re-password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-block rounded-0 Bg-yellow-cz">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </LazyLoad> */}
    </div>
  );
};

export default index;
