import React, { Component, Fragment } from 'react';
// import Post from './Post';
import Post from '../../../../Post';
import Pagination from '../../../../../../UI/Pagination';

import { connect } from 'react-redux';

import {
  postsFetchStart,
  postsCategoryFetchStart,
  postsLinkFetchStart
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
      // if (this.props.posts.length === 0) {
      this.props.postsFetchStart();
      // }
    }
  }

  onPagniateClickHandler = link => {
    return this.props.postsLinkFetchStart(link);
  };
  render() {
    return (
      <Fragment>
        <Categories />
        <div className="my-2">
          <span className="badge badge-primary text-uppercase">
            {!!this.props.categorySlug ? this.props.categorySlug : 'news'}
          </span>
        </div>
        <div className="card-groups mx-0">
          {this.props.posts &&
            Object.keys(this.props.posts).map((key, index) => {
              const post = this.props.posts[key];
              return <Post {...post} key={post.id} index={index + 1} />;
            })}
        </div>
        <Pagination
          onPaginateClicked={link => this.onPagniateClickHandler(link)}
          prev={this.props.prev}
          next={this.props.next}
          currentPage={this.props.currentPage}
          lastPage={this.props.lastPage}
          lastPageUrl={this.props.lastPageUrl}
          firstPageUrl={this.props.firstPageUrl}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.current.data,
  next: state.posts.current.next_page_url,
  prev: state.posts.current.prev_page_url,
  currentPage: state.posts.current.current_page,
  lastPage: state.posts.current.last_page,
  lastPageUrl: state.posts.current.last_page_url,
  firstPageUrl: state.posts.current.first_page_url
});

const mapDispatchToProps = dispatch => {
  return {
    postsFetchStart: () => dispatch(postsFetchStart()),
    postsCategoryFetchStart: slug => dispatch(postsCategoryFetchStart(slug)),
    postsLinkFetchStart: link => dispatch(postsLinkFetchStart(link))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
