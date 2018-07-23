import React, { Component } from 'react';
import { connect } from 'react-redux';

import { articlesFetchStart } from '../../../store/actions/articles.action';
import Article from './Article';

class index extends Component {
  componentDidMount() {
    this.props.articlesFetchStart();
  }
  render() {
    return (
      <div className="container my-5">
        <div className="d-flex flex-row">
          <div className="col-8">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="">Blog</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Articles
                </li>
              </ol>
            </nav>
            <div className="card-groups">
              {this.props.articles &&
                Object.keys(this.props.articles).map((key, index) => {
                  return <Article {...this.props.articles[key]} key={index} />;
                })}
            </div>
          </div>
          <div className="col-4">
            <div className="">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="Search..."
              />
            </div>
            <div className="">
              <h3>Tags</h3>
              <div className="d-flex justify-content-around">
                <a href="" className="badge badge-primary">
                  Primary
                </a>
                <a href="" className="badge badge-secondary">
                  Secondary
                </a>
                <a href="" className="badge badge-success">
                  Success
                </a>
                <a href="" className="badge badge-primary">
                  Primary
                </a>
                <a href="" className="badge badge-secondary">
                  Secondary
                </a>
              </div>
            </div>
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
