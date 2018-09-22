import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { postFetchStart } from '../../../../../../store/actions/post.action';

import Article from './Article';

class index extends Component {
  componentDidMount() {
    this.props.postFetchStart(this.props.slug);
  }
  render() {
    return (
      <Fragment>
        {Object.keys(this.props.post).length > 0 && (
          <div className="container my-5">
            <div className="row border-bottom">
              <div className="col-12 d-flex flex-column">
                <Article {...this.props.post} />
              </div>
            </div>
            <div className="mt-5">
              <div className="card-deck" />
            </div>
          </div>
        )}
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
