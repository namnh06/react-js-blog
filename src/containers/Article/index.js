import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ArticleContent from '../../components/Content/Article';

import './styles.css';
import { articleFetchStart } from '../../store/actions/article.action';

class index extends Component {
  componentDidMount() {
    this.props.articleFetchStart(this.props.match.params.slug);
  }
  render() {
    return (
      <Fragment>
        <Header />
        <ArticleContent {...this.props.article} />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  article: state.article
});

const mapDispatchToProps = dispatch => ({
  articleFetchStart: slug => dispatch(articleFetchStart(slug))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
