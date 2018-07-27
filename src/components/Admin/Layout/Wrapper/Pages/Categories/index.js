import { connect } from 'react-redux';
import React, { Component } from 'react';

import PageContent from '../Components/PageContent';

import './styles.css';

import {
  categoryDeleteStart,
  subCategoryDeleteStart
} from '../../../../../../store/actions/admin/categories.action';

import { ADMIN_PAGES_NAME } from '../../../../../../helpers/constants';
const index = class extends Component {
  onDeleteButtonClickHandler = id => {
    this.props.categoryDeleteStart(id);
  };

  onSubDeleteButtonClickHandler = (id, parentId) => {
    this.props.subCategoryDelteStart(id, parentId);
  };
  render() {
    return (
      <PageContent
        page={ADMIN_PAGES_NAME.CATEGORIES}
        items={this.props.categories}
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

      // {
      /* <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={<a href="">...</a>}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          // onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          // subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        /> */
      // }
      // </div>
      // </div>

      // <div className="col-9">
      //   <div className="mt-5 border border-style-custom ">
      //     <div className="d-flex flex-row justify-content-between align-items-center border-bottom p-3">
      //       <Title className="mb-0">categories</Title>
      //       <Button
      //         className="btn btn-sm btn-info"
      //         // clicked={}
      //       >
      //         <Icon
      //           iconClass={iconClass(true ? 'minus' : 'plus')}
      //           className="text-white"
      //         />
      //       </Button>
      //     </div>

      //     <div className="m-3">
      //       <ul className="list-unstyled">
      //         <HeaderListCategories />
      //         {this.props.categories &&
      //           Object.keys(this.props.categories).map((key, index) => {
      //             return (
      //               <Fragment key={this.props.categories[key].id}>
      //                 <Content
      //                   index={++index}
      //                   deleteButton={id =>
      //                     this.onDeleteButtonClickHandler(id)
      //                   }
      //                   {...this.props.categories[key]}
      //                 />
      //                 <ul className="list-unstyled">
      //                   {this.props.categories[key].sub_categories &&
      //                     Object.keys(
      //                       this.props.categories[key].sub_categories
      //                     ).map((keySub, indexSub) => {
      //                       return (
      //                         <SubContent
      //                           index={`${index}.${++indexSub}`}
      //                           deleteButton={(id, parentId) =>
      //                             this.onSubDeleteButtonClickHandler(
      //                               id,
      //                               parentId
      //                             )
      //                           }
      //                           key={
      //                             this.props.categories[key].sub_categories[
      //                               keySub
      //                             ].id
      //                           }
      //                           {...this.props.categories[key].sub_categories[
      //                             keySub
      //                           ]}
      //                         />
      //                       );
      //                     })}
      //                 </ul>
      //               </Fragment>
      //             );
      //           })}
      //       </ul>
      //     </div>
      //   </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    categoryDeleteStart: id => dispatch(categoryDeleteStart(id)),
    subCategoryDelteStart: (id, parentId) =>
      dispatch(subCategoryDeleteStart(id, parentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
