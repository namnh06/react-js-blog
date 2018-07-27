import { connect } from 'react-redux';
import React, { Component } from 'react';

import { postCreateStart } from '../../../../../../store/actions/post.action';
import { postDeleteStart } from '../../../../../../store/actions/posts.action';
import { articleWillBeCreated } from '../../../../../../helpers/seed-data';
import PageContent from '../Components/PageContent';

import { ADMIN_PAGES_NAME } from '../../../../../../helpers/constants';
const index = class extends Component {
  state = {
    addToggle: false,
    articleWillBeCreated
  };
  onDeleteButtonClickHandler = id => {
    this.props.postDeleteStart(id);
  };

  onAddToggleClicked = () => {
    this.setState(prevState => ({
      addToggle: !prevState.addToggle
    }));
  };

  onCreateTitleChange = event => {
    const title = event.target.value;
    this.setState(prevState => ({
      articleWillBeCreated: {
        ...prevState.articleWillBeCreated,
        title
      }
    }));
  };

  onCreateDescriptionChange = event => {
    const description = event.target.value;
    this.setState(prevState => ({
      articleWillBeCreated: {
        ...prevState.articleWillBeCreated,
        description
      }
    }));
  };

  onCreateReset = _ => {
    this.setState(prevState => ({
      articleWillBeCreated: {
        ...prevState.articleWillBeCreated,
        ...articleWillBeCreated
      }
    }));
  };

  onCreateContentChange = content => {
    this.setState(prevState => ({
      articleWillBeCreated: {
        ...prevState.articleWillBeCreated,
        content
      }
    }));
  };

  onCreateSubmitHandler = event => {
    event.preventDefault();
    const { title, description, content } = this.state.articleWillBeCreated;
    this.props.aritcleCreateStart({
      title,
      description,
      content
    });
  };

  onUpdateTextEditor = editorState => {
    console.log('object', editorState);
  };
  render() {
    return (
      <PageContent
        page={ADMIN_PAGES_NAME.POSTS}
        items={this.props.posts}
        formToggle={this.props.formToggle}
        onFormToggleClicked={_ => this.props.onFormToggleClicked()}
      />
      // <div className="col-10 ">
      //   <div className="mt-5 border border-style-custom ">
      //     <div className="d-flex flex-row justify-content-between align-items-center border-bottom p-3">
      //       <Title className="mb-0">posts</Title>
      //       <Button
      //         className="btn btn-sm btn-info"
      //         clicked={this.onAddToggleClicked}
      //       >
      //         <Icon
      //           iconClass={iconClass(this.state.addToggle ? 'minus' : 'plus')}
      //           className="text-white"
      //         />
      //       </Button>
      //     </div>

      //     <div>
      //       {/* {this.state.addToggle && ( */}
      //       {true && (
      //         <PostForm
      //           onResetButtonClicked={this.onCreateReset}
      //           onTitleChange={event => this.onCreateTitleChange(event)}
      //           onDescriptionChange={event =>
      //             this.onCreateDescriptionChange(event)
      //           }
      //           onContentChange={content => this.onCreateContentChange(content)}
      //           onSubmitHandler={event => this.onCreateSubmitHandler(event)}
      //           {...this.state.articleWillBeCreated}
      //           onUpdateTextEditor={this.onUpdateTextEditor}
      //         />
      //       )}
      //     </div>

      //     <div className="m-3">
      //       <ul className="list-unstyled">
      //         <HeaderListPosts />
      //         {this.props.posts &&
      //           Object.keys(this.props.posts).map((key, index) => {
      //             return (
      //               <Fragment key={this.props.posts[key].id}>
      //                 <Content
      //                   index={++index}
      //                   deleteButton={id => this.onDeleteButtonClickHandler(id)}
      //                   {...this.props.posts[key]}
      //                 />
      //               </Fragment>
      //             );
      //           })}
      //       </ul>
      //     </div>

      //     {/* <ReactPaginate
      //       previousLabel={'previous'}
      //       nextLabel={'next'}
      //       breakLabel={<a href="">...</a>}
      //       breakClassName={'break-me'}
      //       pageCount={this.state.pageCount}
      //       marginPagesDisplayed={2}
      //       pageRangeDisplayed={5}
      //       // onPageChange={this.handlePageClick}
      //       containerClassName={'pagination'}
      //       // subContainerClassName={'pages pagination'}
      //       activeClassName={'active'}
      //     /> */}
      //   </div>
      // </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postDeleteStart: id => dispatch(postDeleteStart(id)),
    aritcleCreateStart: aritcle => dispatch(postCreateStart(aritcle))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
