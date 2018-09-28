import React, { Fragment } from 'react';
import Banner from '../../../Banner';
import { connect } from 'react-redux';
import HelpContent from './Content';
import { HOST } from '../../../../../../helpers/constants';

const index = props => {
  return (
    <Fragment>
      <Banner
        bannerImage={
          !!props.slides &&
          !!props.slides[0] &&
          HOST + props.slides[0].images[0].path
        }
        title="help"
      />

      <HelpContent />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    slides: state.slides.show
  };
};

export default connect(mapStateToProps)(index);
