import React, { Fragment } from 'react';
import Banner from '../../../Banner';
import bannerImage from '../../../../../../assets/images/blog/MenuBanners_Pricing-1920x580.jpg';
import Main from './Main';
import Side from './Side';

const index = props => {
  return (
    <Fragment>
      {/* <Banner bannerImage={bannerImage} title="Blog" /> */}
      <div className="container my-5">
        <div className="row">
          <div className="col-8">
            <Main categorySlug={props.categorySlug} />
          </div>
          <div className="col-4">
            <Side />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
