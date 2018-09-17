import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Article from './Article';
import Pagination from '../../../../../../UI/Pagination';

import { connect } from 'react-redux';

import {
  postsFetchStart,
  postsCategoryFetchStart,
  postsLinkFetchStart
} from '../../../../../../../store/actions/posts.action';
import { isObjectNotEmpty } from '../../../../../../../helpers';
import Breadcrumb from './../../../../../../UI/Breadcrumb';
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
      return this.props.postsCategoryFetchStart(this.props.categorySlug);
    }
    return this.props.postsFetchStart({
      auth: false,
      pageNumber: parseInt(this.props.pageNumber, 10)
    });
  }

  onPaginateClickHandler = number => {
    this.props.history.push('/blog/' + number);
    window.scroll(0, 0);
    return this.props.postsFetchStart({
      auth: false,
      pageNumber: parseInt(number, 10)
    });
  };

  // onCategoryClickHandler = category => {

  // }
  render() {
    return (
      <Fragment>
        <Breadcrumb
          data={['blog', this.props.categorySlug && this.props.categorySlug]}
        />
        <div className="card-decks mx-0">
          {this.props.posts.data &&
            Object.keys(this.props.posts.data).map((key, index) => {
              const post = this.props.posts.data[key];

              return <Article {...post} key={index} />;
            })}
        </div>
        {isObjectNotEmpty(this.props.posts) && (
          <Pagination
            onPaginateClicked={number => this.onPaginateClickHandler(number)}
            {...this.props.posts}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.current
});

const mapDispatchToProps = dispatch => {
  return {
    postsFetchStart: ({ auth, pageNumber }) =>
      dispatch(postsFetchStart({ auth, pageNumber })),
    postsCategoryFetchStart: slug => dispatch(postsCategoryFetchStart(slug)),
    postsLinkFetchStart: link => dispatch(postsLinkFetchStart(link))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(index));
