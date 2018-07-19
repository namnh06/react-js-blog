import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { logoImage } from '../../helpers';
import ListCategory from './ListCategory';
import Picture from '../Details/Picture';

const index = props => {
  return (
    <header>
      <nav className="container-fluid bg-light Navigation-Bar fixed-top">
        <div className="d-flex flex-row">
          <div className="navbar navbar-expand-md navbar-dark py-0 w-100">
            <div className="col-2 navbar-brand d-flex align-items-center my-3">
              <Picture
                className="Navigation-Bar__brand__img--width"
                src={logoImage()}
              />
              <h3 className="text-dark font-italic font-weight-bold ml-3">
                It's Free
                <br />
                <small className="">www.crashzone.com.au</small>
              </h3>
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
                {props.categories &&
                  Object.keys(props.categories).map((pos, index) => {
                    return (
                      <ListCategory
                        type="anchor"
                        key={++index}
                        {...props.categories[pos]}
                      >
                        {props.categories[pos].name}
                      </ListCategory>
                    );
                  })}
                <ListCategory type="button">sign up</ListCategory>
                <ListCategory type="button">log in</ListCategory>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(index);
