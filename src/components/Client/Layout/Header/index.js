import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import Brand from '../../../UI/Brand';
import NavigationBar from './NavigationBar';

import { menusFetchStart } from '../../../../store/actions/menus.action';

class index extends Component {
  componentDidMount() {
    if (this.props.menus.length === 0) {
      this.props.menusFetchStart();
    }
  }

  render() {
    return (
      <div
        id="js-nav-bar"
        className={'container-fluid Client__Navigation-Bar fixed-top'}
      >
        <div className="row h-100">
          <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 h-100 p-0 px-lg-3">
            <div className="col-10 col-lg-3 navbar-brand d-flex align-items-center h-100 mx-0">
              <Brand
                link={this.props.information[1].value}
                slogan="it's free"
                textColor="text-dark"
              />
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
              className="collapse navbar-collapse col-lg-9 px-0"
              id="js-navbar-collapse"
            >
              <ul className="navbar-nav Client__Navigation-Bar__list ml-auto p-3 bg-light">
                {!!this.props.menus.length && (
                  <Fragment>
                    {Object.keys(this.props.menus).map((pos, index) => {
                      return (
                        <NavigationBar
                          type="anchor"
                          key={++index}
                          {...this.props.menus[pos]}
                          slug={this.props.menus[pos].slug}
                          isScroll={this.props.isScroll}
                        >
                          {this.props.menus[pos].name}
                        </NavigationBar>
                      );
                    })}
                    <NavigationBar
                      isScroll={this.props.isScroll}
                      type="button"
                      name="sign up"
                      className="Client__Navigation-Bar__list__button"
                      clicked={this.props.onButtonSignUpClicked}
                    />
                    <NavigationBar
                      isScroll={this.props.isScroll}
                      type="button"
                      name="log in"
                      className="Client__Navigation-Bar__list__button"
                      clicked={this.props.onButtonLogInClicked}
                    />
                  </Fragment>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menus: state.menus
  };
};

const mapDispatchToProps = dispatch => ({
  menusFetchStart: () => dispatch(menusFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
