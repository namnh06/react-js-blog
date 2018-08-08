import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import Breadcrumb from '../../../../../../UI/Breadcrumb';
import {
  postsFetchStart,
  postsCategoryFetchStart
} from '../../../../../../../store/actions/posts.action';
class index extends React.Component {
  componentDidMount() {
    if (this.props.categorySlug) {
      this.props.postsCategoryFetchStart(this.props.categorySlug);
    } else {
      console.log(this.props);
      this.props.postsFetchStart();
    }
  }
  render() {
    return (
      <div className="col-8">
        <Breadcrumb data={['blog']} sort />
        <div className="card-groups">
          {this.props.posts &&
            Object.keys(this.props.posts).map((key, index) => {
              const post = this.props.posts[key];
              return <Post {...post} key={post.id} index={index + 1} />;
            })}
        </div>
      </div>
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
