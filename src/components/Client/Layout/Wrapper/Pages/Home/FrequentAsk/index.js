import React from 'react';
import ListImage from './ListImage';
import usingiPad from './../../../../../../../assets/images/cz-real/cz-using-ipad.jpg';
import iPadMini from './../../../../../../../assets/images/cz-real/iPad-mini.jpg';
import iPhone from './../../../../../../../assets/images/cz-real/iPhoneCZ1.jpg';
import detail from './../../../../../../../assets/images/cz-real/Crashzone-details-page.jpg';
import main from './../../../../../../../assets/images/cz-real/Crashzone-main-page.jpg';
import quote from './../../../../../../../assets/images/cz-real/Crashzone-quote-page.jpg';
import view from './../../../../../../../assets/images/cz-real/Crashzone-view-page.jpg';
import newSystem from './../../../../../../../assets/images/cz-real/CZ-new-system-.jpg';
const index = () => {
  return (
    <div className="container my-5">
      {/* <LazyLoad height={200} offset={100}> */}
      <div className="row">
        <div className="col-12" id="accordion">
          <div className="mb-5">
            <div className="text-uppercase font-weight-bold h1 text-center">
              Frequently Asked Question
            </div>
          </div>
          <div className="card mb-2 ">
            <div className="card-header" id="headingOne">
              <div className="mb-0">
                <a
                  className="text-dark h2 cursor-pointer"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Is Crashzone owned by an insurance company?
                </a>
              </div>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">
                <b>Crashzone</b> is not owned or affiliated to any insurance
                company we are 100% privately owned propriety limited company.
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <a
                  className="text-dark h2 cursor-pointer"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Does Crashzone sell my customer data?
                </a>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body">
                Your privacy is of the up most importance, personal information
                and customer details are not for sale your information is secure
                on <b>Crashzone</b>.
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <a
                  className="text-dark h2 cursor-pointer"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  Can I download Crashzone on to my computer?
                </a>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body">
                <b>Crashzone</b> is web based, you don’t need to download any
                software. To use Crashzone go to www.crashzone.com.au and login
                using your email address and password.
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header" id="headingFour">
              <h5 className="mb-0">
                <a
                  className="text-dark h2 cursor-pointer"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  Can I backup my quotes with Crashzone?
                </a>
              </h5>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordion"
            >
              <div className="card-body">
                YES you can backup quotes as often as you like from the{' '}
                <b>Crashzone</b> settings page. The Backup data is produced in
                PDF and JPG format so you can use it on any computer no need for
                special software.
              </div>
            </div>
          </div>
          <div className="card mb-2 ">
            <div className="card-header" id="headingZero">
              <div className="mb-0">
                <a
                  className="text-dark h2 cursor-pointer"
                  data-toggle="collapse"
                  data-target="#collapseZero"
                  aria-expanded="true"
                  aria-controls="collapseZero"
                >
                  What is the Crashzone look like?
                </a>
              </div>
            </div>
            <div
              id="collapseZero"
              className="collapse"
              aria-labelledby="headingZero"
              data-parent="#accordion"
            >
              <div className="card-body d-flex flex-column align-items-center">
                <ul className="nav flex-column">
                  <ListImage link={usingiPad} />
                  <ListImage link={iPadMini} />
                  <ListImage link={iPhone} />
                  <ListImage link={main} />
                  <ListImage link={detail} />
                  <ListImage link={quote} />
                  <ListImage link={view} />
                  <ListImage link={newSystem} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </LazyLoad> */}
    </div>
  );
};

export default index;
