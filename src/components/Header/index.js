import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import Brand from '../UI/Brand';
import ListCategory from './ListCategory';
import { convertStringToUrl } from '../../helpers';
import { categoriesFetchStart } from '../../store/actions/category.action';

class index extends Component {
  state = {
    isScroll: false
  };

  componentDidMount() {
    this.props.categoriesFetchStart();
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
              style={{ height: this.state.isScroll ? '90px' : '120px' }}
            >
              <div className="col-2 navbar-brand d-flex align-items-center my-3">
                <Brand
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
                  {this.props.categories &&
                    Object.keys(this.props.categories).map((pos, index) => {
                      return (
                        <ListCategory
                          type="anchor"
                          key={++index}
                          {...this.props.categories[pos]}
                          url={convertStringToUrl(
                            this.props.categories[pos].name
                          )}
                        >
                          {this.props.categories[pos].name}
                        </ListCategory>
                      );
                    })}
                  <ListCategory type="button" name="sign up" />
                  <ListCategory type="button" name="log in" />
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
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => ({
  categoriesFetchStart: () => dispatch(categoriesFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
