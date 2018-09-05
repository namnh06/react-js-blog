import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import './styles.css';
import {
  userCreateStart,
  userEditStart,
  userDeleteStart,
  usersDeletedFetchStart,
  userDeletePermanentlyStart,
  userDeletedRestoreStart
} from '../../../../../../store/actions/admin/users.action';

import Title from '../Components/Title';
import Button from '../../../../../UI/Button';
import Icon from '../../../../../UI/Icon';
import Header from '../Components/Header';
import List from '../Components/List';

import Form from '../Components/Form/User';

import {
  iconClass,
  displayStringTemporary,
  hideStringTemporary
} from '../../../../../../helpers';

import './styles.css';
import {
  USER_CREATE_START,
  USER_EDIT_START
} from '../../../../../../helpers/constants';

const index = class extends Component {
  state = {
    displayOldData: false,
    userFormEdit: null
  };

  onButtonDeleteClickHandler = id => {
    this.props.deleteStart(id);
  };

  onButtonFetchDeletedPosts = () => {
    this.props.deletedFetchStart();
    this.setState(prev => ({
      displayOldData: !prev.displayOldData
    }));
  };

  onButtonDeletePermanentlyClickHandler = id => {
    this.props.deletePermanentlyStart(id);
  };

  onButtonRestoreClickHandler = id => {
    this.props.deletedRestoreStart(id);
  };

  onDeleteButtonClickHandler = id => {
    this.props.userDeleteStart(id);
  };

  onButtonEditClickHandler = user => {
    this.setState(prevState => ({
      ...prevState,
      userFormEdit: {
        ...user,
        isValidName: null,
        saveButtonClicked: false
      }
    }));
    this.props.onFormEditToggleClicked(true);
  };

  render() {
    return (
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
        <Fragment>
          {this.props.formToggle && (
            <Form
              type={USER_CREATE_START}
              page={this.props.page}
              onFormToggleClicked={this.props.onFormToggleClicked}
            />
          )}
        </Fragment>
        <Fragment>
          {this.props.formEditToggle && (
            <Form
              type={USER_EDIT_START}
              page={this.props.page}
              onFormEditToggleClicked={this.props.onFormEditToggleClicked}
              userFormEdit={this.state.userFormEdit}
            />
          )}
        </Fragment>

        <div className="m-3">
          <ul className="list-unstyled">
            <Header
              page={this.props.page}
              className={this.props.items.length === 0 ? '' : 'border-bottom-0'}
            />
            {this.props.items &&
              Object.keys(this.props.items).map((key, index) => {
                const item = this.props.items[key];
                return (
                  <Fragment key={item.id}>
                    <List
                      page={this.props.page}
                      index={index + 1}
                      last={index === this.props.items.length - 1}
                      onButtonDeleteClicked={_ =>
                        this.onButtonDeleteClickHandler(item.id)
                      }
                      onButtonEditClicked={_ => {
                        this.onButtonEditClickHandler(item);
                      }}
                      {...item}
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
                  ? hideStringTemporary('users')
                  : displayStringTemporary('users')}
              </Button>
            </li>
            {this.state.displayOldData &&
              this.props.itemsDeleted &&
              Object.keys(this.props.itemsDeleted).map((key, index) => {
                const item = this.props.itemsDeleted[key];
                return (
                  <Fragment key={item.id}>
                    <List
                      type="old"
                      page={this.props.page}
                      index={++index}
                      last={index === this.props.itemsDeleted.length}
                      onButtonDeletePermanentlyClicked={_ =>
                        this.onButtonDeletePermanentlyClickHandler(item.id)
                      }
                      onButtonRestoreClicked={_ =>
                        this.onButtonRestoreClickHandler(item.id)
                      }
                      {...item}
                    />
                  </Fragment>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    items: state.users.current,
    itemsDeleted: state.users.deleted
  };
};

const mapDispatchToProps = dispatch => ({
  deleteStart: id => dispatch(userDeleteStart(id)),
  deletedFetchStart: _ => dispatch(usersDeletedFetchStart()),
  deletePermanentlyStart: id => dispatch(userDeletePermanentlyStart(id)),
  deletedRestoreStart: id => dispatch(userDeletedRestoreStart(id)),
  userEditStart: (id, user) => dispatch(userEditStart(id, user)),
  createStart: user => dispatch(userCreateStart(user)),
  userDeleteStart: id => dispatch(userDeleteStart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
