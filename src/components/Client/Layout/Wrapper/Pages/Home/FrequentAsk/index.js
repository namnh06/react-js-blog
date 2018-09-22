import React from 'react';
import LazyLoad from 'react-lazyload';
import cmccDocument from './../../../../../../../assets/documents/Crashzone-Membership-Code-of-Conduct-20141.pdf';
const index = () => {
  return (
    <div className="container mt-5">
      <LazyLoad height={200} offset={100}>
        <div className="row">
          <div className="col-6" id="accordion">
            <div className="mb-3">
              <div className="text-uppercase font-weight-bold h2 Client__Frequent-Ask__Text--underline">
                Frequently Asked Question
              </div>
            </div>
            <div className="card mb-2 ">
              <div className="card-header" id="headingOne">
                <div className="mb-0">
                  <button
                    className="btn btn-link text-dark"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Is Crashzone owned by an insurance company?
                  </button>
                </div>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body Text--sm">
                  <b>Crashzone</b> is not owned or affiliated to any insurance
                  company we are 100% privately owned propriety limited company
                </div>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-dark"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Does Crashzone sell my customer data?
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body Text--sm">
                  Your privacy is of the up most importance, personal
                  information and customer details are not for sale your
                  information is secure on <b>Crashzone</b>.
                </div>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-dark"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Can I download Crashzone on to my computer?
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body Text--sm">
                  <b>Crashzone</b> is web based; you don’t need to download any
                  software. To use Crashzone go to www.crashzone.com.au and
                  login using your email address and password.
                </div>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-header" id="headingFour">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-dark"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    Can I backup my quotes with Crashzone?
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div className="card-body Text--sm">
                  YES you can backup quotes as often as you like from the{' '}
                  <b>Crashzone</b> settings page. The Backup data is produced in
                  PDF and JPG format so you can use it on any computer no need
                  for special software.
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <div className="text-uppercase font-weight-bold h2 Client__Frequent-Ask__Text--underline">
                CRASHZONE COMMUNITY REPAIRER NETWORK
              </div>
            </div>
            <div className="Text--sm">
              <p>
                As the smash repair industry rocks with the waves of change
                created from the PSR networks and establishment of larges MSO’s,
                &nbsp;one new network has arisen that puts the local community
                at the top of its work providers. Crashzones&nbsp;
                <strong>
                  <em>“Community Repairer Network”</em>
                </strong>
                &nbsp;(
                <strong>C&nbsp; CRN</strong>) will provide via its 200 strong
                members just what it’s name suggests, an &nbsp;Australia wide
                community of repairers with a common goal of repairing damaged
                vehicles to standards that are allied with the community’s
                expectations.
                <a
                  className="btn btn-link text-muted font-italic"
                  data-target="#collapseCCRN"
                  data-toggle="collapse"
                >
                  Read More
                </a>
              </p>

              <div className="collapse" id="collapseCCRN">
                <p>
                  Through alliances will provide technical data suppliers and
                  equipment manufacturers CRN will share knowledge and expertise
                  as well as work contacts to put back into the repair industry
                  what has been lost to the peak bodies in recent times. No
                  repair shop is too big and none too small to be part of the C
                  CRN although the one common thread and prerequisite to be a
                  member is the use of the Crashzone’s online quoting
                  system.&nbsp; Crashzone has grown its software users in every
                  state of Australia (and elsewhere) to over 600 over a
                  relatively short period and with numbers like that it’s not
                  hard to see why suppliers and work providers alike are keen to
                  talk about the future.
                </p>
                <p>
                  The executive team of 5 are all from different States and have
                  extensive knowledge in their region’s and have made it
                  perfectly clear that, just like its members, the Crashzone
                  Community Repairer Network they will hold its core values of
                  honesty and intergrity above all else and no shop will be
                  larger than the group. A code of conduct has been written and
                  posted on the website for review by members and non members
                  www.crashzone.com.au
                </p>
                <p>
                  The local charities and sporting clubs of the member repairers
                  will also be the winners, as it will be encouraged and
                  advertised when repairers are giving back to the community in
                  any way. Watch this space for more news as the group gains
                  momentum to effect positive change to the industry.
                </p>
                <p>
                  For clarity, the Community Repairer Network executive are
                  focused on the controlling the controllable. It’s charter does
                  not include matters/ topics that are already supplied by MTA’s
                  or other governing bodies.
                </p>
                <p>
                  If you would like to become a member just log on to
                  www.crashzone.com.au and express your interest. Best of all is
                  Crashzone Quoting is Free.
                </p>
                <p>
                  Membership of the Communtiy Repairer Network (an additional
                  service for Crashzone users) is provided for a small
                  membership fee.
                </p>
                <p>
                  <strong>
                    <a href={cmccDocument} target="_blank">
                      CCRN – Code Of Conduct
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default index;
