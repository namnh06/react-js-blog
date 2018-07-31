import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { postFetchStart } from '../../../../../../store/actions/post.action';

import Article from './Article';
import Side from './Side';
class index extends Component {
  componentDidMount() {
    this.props.postFetchStart(this.props.slug);
  }
  render() {
    return (
      <Fragment>
        <div className="container my-5">
          <div className="d-flex flex-row">
            <Article {...this.props.post} />
            <Side />
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
