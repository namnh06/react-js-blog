import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import { articlesFetchStart } from '../../../../store/actions/articles.action';
import Article from '../../Blog/Article';
class index extends Component {
  componentDidMount() {
    this.props.articlesFetchStart();
  }
  render() {
    return (
      <div className="container mt-5 Home-Articles">
        <div className="d-flex flex-row">
          <div className="col-12">
            <h1 className="Home-Articles__text w-100 text-center mb-4">
              Latest News
            </h1>
            <div className="card-deck ">
              {this.props.articles &&
                Object.keys(this.props.articles.slice(0, 3)).map(
                  (key, index) => {
                    return (
                      <Article {...this.props.articles[key]} key={index} />
                    );
                  }
                )}
            </div>
          </div>
        </div>
        <div className="d-flex flex-row mt-3">
          <div className="col-4 d-flex align-items-center">
            <div className="Home-Articles__dash bg-dark w-100" />
          </div>
          <div className="col-4 d-flex justify-content-center">
            <button className="btn btn-lg btn-block btn-outline-dark rounded-0 bg-yellow-cz-custom text-uppercase Home-Articles__button">
              view all articles
            </button>
          </div>
          <div className="col-4 d-flex align-items-center">
            <div className="Home-Articles__dash bg-dark w-100" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => {
  return {
    articlesFetchStart: () => dispatch(articlesFetchStart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
