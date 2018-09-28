import React from 'react';
import cmccDocument from './../../../../../../../assets/documents/Crashzone-Membership-Code-of-Conduct-20141.pdf';
const index = () => {
  return (
    <div
      className="container-fluid Client__Home__Network--background-color"
      id="network"
    >
      <div className="row">
        <div className="container Client__Home__Network--background-image my-5">
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <div className="text-uppercase text-center text-white font-weight-bold h1 my-5 ">
                  CRASHZONE COMMUNITY REPAIRER NETWORK
                </div>
              </div>
              <div className=" text-white text-justify">
                <p>
                  As the smash repair industry rocks with the waves of change
                  created from the PSR networks and establishment of larges
                  MSO’s, &nbsp;one new network has arisen that puts the local
                  community at the top of its work providers. Crashzones&nbsp;
                  <strong>
                    <em>“Community Repairer Network”</em>
                  </strong>
                  &nbsp;(
                  <strong>C&nbsp; CRN</strong>) will provide via its 200 strong
                  members just what it’s name suggests, an &nbsp;Australia wide
                  community of repairers with a common goal of repairing damaged
                  vehicles to standards that are allied with the community’s
                  expectations.
                  {/* <a
                className="btn btn-link text-muted font-italic"
                data-target="#collapseCCRN"
                data-toggle="collapse"
              >
                Read More
              </a> */}
                </p>

                {/* <div className="collapse" id="collapseCCRN"> */}
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
                    <a
                      href={cmccDocument}
                      target="_blank"
                      className="text-white"
                    >
                      CCRN – Code Of Conduct
                    </a>
                  </strong>
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
