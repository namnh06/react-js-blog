import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../UI/Button';
import { authStartLogOut } from '../../../../store/actions/admin/auth.action';

import Brand from '../../../UI/Brand';
class NavigationBar extends Component {
  onButtonClickHandler = () => {
    this.props.authStartLogOut();
  };

  render() {
    return (
      // <div className="container-fluid p-0 bg-dark Admin__Navigation-Bar fixed-top">
      //   <div className="d-flex flex-row h-100">
      //     <div className="col-4 d-flex justify-content-start align-items-center">
      //       <Picture
      //         src={logoImage()}
      //         alt="Crashzone"
      //         className="Admin__Navigation-Bar__img--height"
      //       />
      //       {/* <h1 className="text-white">Sharing & Learning</h1> */}
      //     </div>
      //     <div className="col-8 d-flex justify-content-end align-items-center my-2">
      //       <Button
      //         clicked={this.onButtonClickHandler}
      //         className="btn btn-danger rounded-0"
      //       >
      //         log out
      //       </Button>
      //     </div>
      //   </div>
      // </div>

      <div
        id="js-nav-bar"
        className={
          'container-fluid Client__Navigation-Bar fixed-top border-bottom'
        }
      >
        <div className="row h-100">
          <nav className="navbar navbar-expand-lg navbar-light w-100 h-100 p-0 px-lg-3">
            <div className="col-10 col-lg-3 navbar-brand d-flex align-items-center h-100 mx-0">
              <Brand slogan="it's free" textColor="text-white" />
            </div>
            <div className="d-flex d-lg-none col-2 justify-content-end">
              <button
                className="navbar-toggler collapsed Client__Navigation-Bar__Button border border-dark rounded-0"
                type="button"
                data-toggle="collapse"
                data-target="#js-navbar-collapse"
                aria-controls="js-navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars fa-2x text-dark" />
              </button>
            </div>

            <div
              className="collapse navbar-collapse col-lg-9 justify-content-end px-0"
              id="js-navbar-collapse"
            >
              <Button
                clicked={this.onButtonClickHandler}
                className="btn btn-danger rounded-0"
              >
                log out
              </Button>
            </div>
          </nav>
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
