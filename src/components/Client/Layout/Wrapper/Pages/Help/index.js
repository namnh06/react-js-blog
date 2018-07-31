import React, { Fragment } from 'react';
import Banner from '../../../Banner';
import Video from './Video';
import HelpContent from './Content';
import helpImage from '../../../../../../assets/images/help/help-1.jpg';
const index = () => {
  return (
    <Fragment>
      <Banner bannerImage={helpImage} title="help" />
      <Video />
      <HelpContent />
    </Fragment>
  );
};

export default index;
