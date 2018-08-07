import { connect } from 'react-redux';
import React, { Component } from 'react';

import Brand from '../../../UI/Brand';
import NavigationBar from './NavigationBar';

// import './styles.scss';
import { menusFetchStart } from '../../../../store/actions/menus.action';

class index extends Component {
  componentDidMount() {
    this.props.menusFetchStart();
  }
  render() {
    return (
      <nav
        id="js-nav-bar"
        className="container-fluid bg-light Navigation-Bar fixed-top"
      >
        <div className="row h-100">
          <div className="navbar navbar-expand-md navbar-dark py-0 w-100 h-100">
            <div className="col-lg-4 navbar-brand d-flex align-items-center h-100">
              <Brand
                isScroll={this.props.isScroll}
                link="www.crashzone.com.au"
                slogan="it's free"
                textColor="text-dark"
              />
            </div>
            <div
              className="col-lg-8 collapse navbar-collapse justify-content-end h-100"
              id="navbar-collapse"
            >
              <button
                className="navbar-toggler button-yellow col-sm-1 offset-sm-8 col-xs-2"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-collapse"
              >
                <i className="fa fa-bars button--bars-black" />
              </button>

              <ul className="nav navbar-nav Navigation-Bar__list h-100 d-flex align-items-center">
                {this.props.menus &&
                  Object.keys(this.props.menus).map((pos, index) => {
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
                  className="Navigation-Bar__list__button"
                />
                <NavigationBar
                  isScroll={this.props.isScroll}
                  type="button"
                  name="log in"
                  className="Navigation-Bar__list__button"
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
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
