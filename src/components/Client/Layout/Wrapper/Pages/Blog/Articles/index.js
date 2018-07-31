import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import Breadcrumb from '../../../../../../UI/Breadcrumb';
import { postsFetchStart } from '../../../../../../../store/actions/posts.action';
class index extends React.Component {
  componentDidMount() {
    this.props.postsFetchStart();
  }
  render() {
    return (
      <div className="col-8">
        <Breadcrumb data={['blog']} sort />
        <div className="card-groups">
          {this.props.posts &&
            Object.keys(this.props.posts).map((key, index) => {
              const post = this.props.posts[key];
              return <Post {...post} key={post.id} index={++index} />;
            })}
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
