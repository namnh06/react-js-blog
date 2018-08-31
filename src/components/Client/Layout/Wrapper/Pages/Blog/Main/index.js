import React, { Component, Fragment } from 'react';
import Post from './Post';

import { connect } from 'react-redux';

import {
  postsFetchStart,
  postsCategoryFetchStart
} from '../../../../../../../store/actions/posts.action';
import Categories from './Categories';
class index extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.categorySlug !== prevProps.categorySlug) {
      if (this.props.categorySlug) {
        this.props.postsCategoryFetchStart(this.props.categorySlug);
      }
    }
  }
  componentDidMount() {
    if (this.props.categorySlug) {
      this.props.postsCategoryFetchStart(this.props.categorySlug);
    } else {
      if (this.props.posts.length === 0) {
        this.props.postsFetchStart();
      }
    }
  }
  render() {
    return (
      <Fragment>
        <Categories />
        <span className="badge badge-primary">Primary</span>

        <div className="card-deck mx-0">
          {this.props.posts &&
            Object.keys(this.props.posts)
              .slice(0, 2)
              .map((key, index) => {
                const post = this.props.posts[key];
                return (
                  <Post
                    {...post}
                    key={post.id}
                    className={index === 0 ? 'ml-0' : 'mr-0'}
                    index={index + 1}
                  />
                );
              })}
        </div>
        <div className="card-groups border-bottom mb-2">
          {this.props.posts &&
            Object.keys(this.props.posts)
              .slice(2, Object.keys(this.props.posts).length / 2)
              .map((key, index) => {
                const post = this.props.posts[key];
                return <Post {...post} key={post.id} index={index + 1} />;
              })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.current
});

const mapDispatchToProps = dispatch => {
  return {
    postsFetchStart: () => dispatch(postsFetchStart()),
    postsCategoryFetchStart: slug => dispatch(postsCategoryFetchStart(slug))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
