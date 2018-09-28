import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postsFetchStart } from '../../../../../../../store/actions/posts.action';
import Post from '../../../../Post';

import { withRouter } from 'react-router-dom';

class index extends Component {
  componentDidMount() {
    this.props.postsFetchStart();
  }
  render() {
    return (
      <div className="container-fluid bg-light Client__Articles py-5 ">
        {/* <LazyLoad height={200} offset={100}> */}
        <div className="row">
          <div className="col-12">
            <div className="Client__Articles__Text w-100 text-center font-weight-bold h1 text-uppercase">
              Articles
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card-deck my-5 d-none d-lg-flex">
              {this.props.posts &&
                Object.keys(this.props.posts.slice(0, 6)).map((key, index) => {
                  const post = this.props.posts[key];
                  return <Post {...post} key={index} index={index + 1} />;
                })}
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-1 offset-4 d-flex align-items-center ">
            <div className="Client__Articles__Dash bg-dark w-100" />
          </div>
          <div className="col-2  d-flex justify-content-center">
            <button
              onClick={_ => {
                return this.props.history.push('/blog');
              }}
              className="btn btn-lg btn-block btn-outline-dark rounded-0 bg-yellow-cz-custom text-uppercase Client__Articles__button"
            >
              view all articles
            </button>
          </div>
          <div className="col-1 d-flex align-items-center ">
            <div className="Client__Articles__Dash bg-dark w-100" />
          </div>
        </div>
        {/* </LazyLoad> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.current.data
});

const mapDispatchToProps = dispatch => {
  return {
    postsFetchStart: () => dispatch(postsFetchStart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(index));
