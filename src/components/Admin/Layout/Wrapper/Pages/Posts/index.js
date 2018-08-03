import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import {
  postDeleteStart,
  postsDeletedFetchStart,
  postDeletePermanentlyStart,
  postDeletedRestoreStart
} from '../../../../../../store/actions/posts.action';
import FormPost from '../Components/Form/Post';
import {
  iconClass,
  displayStringTemporary,
  hideStringTemporary
} from '../../../../../../helpers';
import { POST_CREATE_START } from '../../../../../../helpers/constants';

import Title from '../Components/Title';
import Button from '../../../../../UI/Button';
import Icon from '../../../../../UI/Icon';
import Header from '../Components/Header';
import ListPosts from '../Components/List';
import ListOldPosts from '../Components/ListOld/Post';
import './styles.css';

const index = class extends Component {
  state = {
    displayOldData: false,
    postFormEdit: null
  };
  onButtonDeleteClickHandler = id => {
    this.props.postDeleteStart(id);
  };
  onButtonFetchDeletedPosts = () => {
    this.props.postsDeletedFetchStart();
    this.setState(prev => ({
      displayOldData: !prev.displayOldData
    }));
  };

  onButtonDeletePermanentlyClickHandler = id => {
    this.props.postDeletePermanentlyStart(id);
  };

  onButtonRestoreClickHandler = id => {
    this.props.deletedRestoreStart(id);
  };

  render() {
    return (
      <div className="col-10 ">
        <div className="mt-5 border border-style-custom ">
          <div className="d-flex justify-content-between align-items-center border-bottom p-3">
            <Title className="mb-0">{this.props.page}</Title>
            <Button
              className="btn-sm btn-info"
              clicked={this.props.onFormToggleClicked}
            >
              <Icon
                iconClass={iconClass(this.props.formToggle ? 'minus' : 'plus')}
                className="text-white"
              />
            </Button>
          </div>

          {this.props.formToggle && (
            <div>
              <div>
                <FormPost
                  type={POST_CREATE_START}
                  page={this.props.page}
                  onFormToggleClicked={this.props.onFormToggleClicked}
                />
              </div>
            </div>
          )}

          {/* {this.props.formEditToggle && (
            <div>
              <div>
                <FormCategory
                  type={CATEGORY_EDIT_START}
                  page={this.props.page}
                  onFormEditToggleClicked={this.props.onFormEditToggleClicked}
                  categoryFormEdit={this.state.categoryFormEdit}
                />
              </div>
            </div>
          )} */}

          <div className="m-3">
            <ul className="list-unstyled">
              <Header
                page={this.props.page}
                className={
                  this.props.posts.length === 0 ? '' : 'border-bottom-0'
                }
              />
              {this.props.posts &&
                Object.keys(this.props.posts).map((key, index) => {
                  const post = this.props.posts[key];
                  return (
                    <Fragment key={post.id}>
                      <ListPosts
                        page={this.props.page}
                        index={++index}
                        last={index === this.props.posts.length}
                        onButtonDeleteClicked={id =>
                          this.onButtonDeleteClickHandler(post.id)
                        }
                        onButtonEditClicked={_ => {
                          this.onButtonEditClickHandler(post);
                        }}
                        {...post}
                      />
                    </Fragment>
                  );
                })}
              <li className="Admin-Posts-Content">
                <Button
                  className="btn btn-sm btn-secondary rounded-0 my-2 text-uppercase"
                  clicked={this.onButtonFetchDeletedPosts}
                >
                  {this.state.displayOldData
                    ? hideStringTemporary('posts')
                    : displayStringTemporary('posts')}
                </Button>
              </li>
              {this.state.displayOldData &&
                this.props.postsDeleted &&
                Object.keys(this.props.postsDeleted).map((key, index) => {
                  const post = this.props.postsDeleted[key];
                  return (
                    <Fragment key={post.id}>
                      <ListOldPosts
                        page={this.props.page}
                        index={++index}
                        last={index === this.props.postsDeleted.length}
                        onButtonDeletePermanentlyClicked={id =>
                          this.onButtonDeletePermanentlyClickHandler(post.id)
                        }
                        onButtonRestoreClicked={id =>
                          this.onButtonRestoreClickHandler(post.id)
                        }
                        {...post}
                      />
                    </Fragment>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    posts: state.posts.current,
    postsDeleted: state.posts.deleted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postDeleteStart: id => dispatch(postDeleteStart(id)),
    postsDeletedFetchStart: _ => dispatch(postsDeletedFetchStart()),
    postDeletePermanentlyStart: id => dispatch(postDeletePermanentlyStart(id)),
    deletedRestoreStart: id => dispatch(postDeletedRestoreStart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
