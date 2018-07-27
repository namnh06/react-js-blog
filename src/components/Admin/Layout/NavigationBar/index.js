import React, { Component } from 'react';
import { connect } from 'react-redux';
import Picture from '../../../../components/UI/Picture';

import crashzoneImageSrc from '../../../../assets/images/crashzone-logo.svg';
import './styles.css';
import Button from '../../../UI/Button';
import { authStartLogOut } from '../../../../store/actions/admin/auth.action';

class NavigationBar extends Component {
  onButtonClickHandler = () => {
    this.props.authStartLogOut();
  };

  render() {
    return (
      <div className="container-fluid p-0 bg-dark Navigation-Bar">
        <div className="d-flex flex-row ">
          <div className="col-2 d-flex justify-content-start my-2">
            <Picture
              imageSrc={crashzoneImageSrc}
              imageHeight="75px"
              imageAlt="Crashzone"
            />
          </div>
          <div className="col-10 d-flex justify-content-end align-items-center my-2">
            <Button
              clicked={this.onButtonClickHandler}
              className="btn btn-danger rounded-0"
            >
              log out
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authStartLogOut: () => dispatch(authStartLogOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavigationBar);
