import { connect } from 'react-redux';
import React, { Component } from 'react';

import Brand from '../../UI/Brand';
import NavigationBar from './NavigationBar';

import './styles.css';
import { menusFetchStart } from '../../../store/actions/menus.action';

class index extends Component {
  state = {
    isScroll: false
  };

  componentDidMount() {
    this.props.menusFetchStart();
    window.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler = event => {
    const top = window.scrollY;
    top > 100 &&
      !this.state.isScroll &&
      this.setState(prevState => ({
        isScroll: true
      }));

    top < 100 &&
      this.state.isScroll &&
      this.setState({
        isScroll: false
      });
  };

  render() {
    return (
      <header>
        <nav
          id="js-nav-bar"
          className="container-fluid bg-light Navigation-Bar fixed-top"
        >
          <div className="d-flex flex-row">
            <div
              className="navbar navbar-expand-md navbar-dark py-0 w-100"
              style={{ height: this.state.isScroll ? '60px' : '90px' }}
            >
              <div className="col-2 navbar-brand d-flex align-items-center my-3">
                <Brand
                  isScroll={this.state.isScroll}
                  link="www.crashzone.com.au"
                  slogan="it's free"
                  textColor="text-dark"
                />
              </div>
              <button
                className="navbar-toggler button-yellow col-sm-1 offset-sm-8 col-xs-2"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-collapse"
              >
                <i className="fa fa-bars button--bars-black" />
              </button>
              <div
                className="col-10 collapse navbar-collapse justify-content-end h-100"
                id="navbar-collapse"
              >
                <ul className="nav navbar-nav Navigation-Bar__list h-100 d-flex align-items-center">
                  {this.props.menus &&
                    Object.keys(this.props.menus).map((pos, index) => {
                      return (
                        <NavigationBar
                          type="anchor"
                          key={++index}
                          {...this.props.menus[pos]}
                          slug={this.props.menus[pos].slug}
                          isScroll={this.state.isScroll}
                        >
                          {this.props.menus[pos].name}
                        </NavigationBar>
                      );
                    })}
                  <NavigationBar
                    isScroll={this.state.isScroll}
                    type="button"
                    name="sign up"
                    className="Navigation-Bar__list__button"
                  />
                  <NavigationBar
                    isScroll={this.state.isScroll}
                    type="button"
                    name="log in"
                    className="Navigation-Bar__list__button"
                  />
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
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
