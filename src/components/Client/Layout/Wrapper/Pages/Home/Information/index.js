import React from 'react';

const index = () => {
  return (
    //  the crashzone system
    <div className="container-fluid Client__Home__Information--background-image my-5">
      {/* Client__Information__TCS */}
      {/* <div className="row"> */}
      {/* <div className="col-12 "> */}
      {/* <div className="text-center text-uppercase font-weight-bold display-4 Client__Information__Text">
            what is crashzone ?
          </div> */}
      {/* </div> */}
      {/* </div> */}
      <div className="row py-5">
        {/* <div className="col-6 pr-3 ">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="h1 text-white text-uppercase display-3">
              The Crashzone System
            </div>
          </div>
        </div> */}
        <div className="col-4 offset-2 text-white">
          {/* <div className="d-flex align-items-center justify-content-center h-100"> */}
          <div className="h1 text-uppercase display-3">
            The Crashzone System
          </div>
          {/* </div> */}
          <p>
            <b>Crashzone</b> is a web based quoting system for Smash Repairers
            accessed by secure login using a user name and password (the same as
            internet banking).
          </p>
          <p>
            Being web based allows you to access Crashzone from any computer,
            laptop, note book or mobile device that has internet access. This
            allows you to use technology such as the Apple iPad, iPhone and
            Android devices. Fast and simple to use, writes quotes, add images,
            create tax and excess invoices, email and print your quote.
            Crashzone is accepted by all insurance companies.
          </p>

          <p>
            Crashzone has over 1000 users in Australia and New Zealand and
            combined our users are generating 250,000 + quotes with a value in
            excess of $500,000,000 (half a billion dollars) annually.
          </p>
          <div className="h1 text-uppercase display-3">
            INSURANCE INTEGRATION
          </div>
          <p>
            <b>Crashzone</b> is compaitable with all insurance companies and has
            integration with Audatex, PNET, ORM, NTAR, LTAR, AutoIntegrity,
            Estimage & ARNIE.
          </p>
          <p>
            There are no support fees or extra modules to buy, everything is
            included such as integration with Audatex, ORM, PNET, AutoIntegrity,
            ARNIE & Estimage.
          </p>
        </div>
        {/* <div className="col-4 Client__Home__Information--background-image" /> */}
      </div>

      {/* <div className="row my-5 px-2">
        <div className="col-6 text-justify Text--sm">
          <p>
            <b>Crashzone</b> is compaitable with all insurance companies and has
            integration with Audatex, PNET, ORM, NTAR, LTAR, AutoIntegrity,
            Estimage & ARNIE.
          </p>
          <p>
            There are no support fees or extra modules to buy, everything is
            included such as integration with Audatex, ORM, PNET, AutoIntegrity,
            ARNIE & Estimage.
          </p>
        </div>
        <div className="col-6 pl-3 ">
          <div className="d-flex align-items-center justify-content-center Client__Information__II h-100">
            <div className="h1 text-white text-uppercase Text--xxl">
              INSURANCE INTEGRATION
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default index;
