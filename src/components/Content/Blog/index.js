import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postsFetchStart } from '../../../store/actions/posts.action';
import Post from './Post';
import Breadcrumb from '../../UI/Breadcrumb';

class index extends Component {
  componentDidMount() {
    this.props.postsFetchStart();
  }
  render() {
    return (
      <div className="container my-5">
        <div className="d-flex flex-row">
          <div className="col-8">
            <Breadcrumb data={['blog']} sort />
            <div className="card-groups">
              {this.props.posts &&
                Object.keys(this.props.posts).map((key, index) => {
                  return <Post {...this.props.posts[key]} key={index} />;
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
  posts: state.posts
});

const mapDispatchToProps = dispatch => {
  return {
    postsFetchStart: () => dispatch(postsFetchStart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
