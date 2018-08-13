import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import Brand from '../../../UI/Brand';
import NavigationBar from './NavigationBar';

import { menusFetchStart } from '../../../../store/actions/menus.action';

class index extends Component {
  componentDidMount() {
    this.props.menusFetchStart();
  }

  render() {
    return (
      <div
        id="js-nav-bar"
        className={[
          'container-fluid bg-light Client__Navigation-Bar fixed-top'
        ].join(' ')}
      >
        <div className="row h-100">
          <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 w-100 h-100">
            <div className="navbar-brand d-flex align-items-center h-100">
              <Brand
                link="www.crashzone.com.au"
                slogan="it's free"
                textColor="text-dark"
              />
            </div>
            <button
              className="navbar-toggler collapsed bg-secondary border border-yellow-cz-custom"
              type="button"
              data-toggle="collapse"
              data-target="#js-navbar-collapse"
              aria-controls="js-navbar-collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars button--bars-black" />
            </button>
            <div
              className="navbar-collapse collapse justify-content-end h-100"
              id="js-navbar-collapse"
            >
              <ul className="navbar-nav Client__Navigation-Bar__list h-100 d-flex align-items-lg-center ml-auto py-md-3 align-items-md-start border-md-top border-lg-top-0">
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
