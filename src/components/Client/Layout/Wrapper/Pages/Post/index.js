import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { postFetchStart } from '../../../../../../store/actions/post.action';

import Article from './Article';
import Side from './Side';
import PostsRelated from './PostsRelated';
class index extends Component {
  componentDidMount() {
    this.props.postFetchStart(this.props.slug);
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className="container my-5">
          <div className="row border-bottom">
            <Article {...this.props.post} />
            <Side categories={this.props.post.categories} />
          </div>
          <div className="row mt-5">
            <PostsRelated />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => ({
  postFetchStart: slug => dispatch(postFetchStart(slug))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
