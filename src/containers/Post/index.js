import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import Post from '../../components/Content/Post';

import './styles.css';
import { postFetchStart } from '../../store/actions/post.action';

class index extends Component {
  componentDidMount() {
    this.props.postFetchStart(this.props.match.params.slug);
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Post {...this.props.post} />
        <Footer />
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
