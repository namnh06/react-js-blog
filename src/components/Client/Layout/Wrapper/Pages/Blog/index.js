import React, { Fragment } from 'react';
import Banner from '../../../Banner';
import bannerImage from '../../../../../../assets/images/blog/MenuBanners_Pricing-1920x580.jpg';
import Articles from './Articles';
import Side from './Side';
const index = () => {
  return (
    <Fragment>
      <Banner bannerImage={bannerImage} title="Blog" />
      <div className="container my-5">
        <div className="d-flex flex-row">
          <Articles />
          <Side />
        </div>
      </div>
    </Fragment>
  );
};

export default index;
