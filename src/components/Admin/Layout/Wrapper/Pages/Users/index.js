import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import {
  userCreateStart,
  userEditStart,
  userDeleteStart,
  usersDeletedFetchStart,
  userDeletePermanentlyStart,
  userDeletedRestoreStart,
  usersLinkFetchStart,
  usersFetchStart
} from '../../../../../../store/actions/admin/users.action';

import Title from '../Components/Title';
import Button from '../../../../../UI/Button';
import Icon from '../../../../../UI/Icon';
import Header from '../Components/Header';
import List from '../Components/List';
import Pagination from '../../../../../UI/Pagination';
import FormUser from '../Components/Form/User';

import { iconClass, isValidName } from '../../../../../../helpers';

import {
  USER_CREATE_START,
  USER_EDIT_START
} from '../../../../../../helpers/constants';

const index = class extends Component {
  state = {
    displayOldData: false,
    userFormEdit: null
  };
  componentDidMount() {
    return this.props.usersFetchStart({
      pageNumber: parseInt(this.props.pageNumber, 10)
    });
  }

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
        id: user.id,
        name: user.name,
        isValidName: isValidName(user.name),
        password: '',
        isValidPassword: null,
        email: user.email
      }
    }));
    this.props.onFormEditToggleClicked(true);
  };

  onPagniateClickHandler = number => {
    return this.props.history.push('/admin/users/' + number);
  };

  render() {
    return (
      <div className="mt-5 border border-style-custom ">
        <div className="d-flex justify-content-between align-users-center border-bottom p-3">
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
            <FormUser
              type={USER_CREATE_START}
              page={this.props.page}
              onFormToggleClicked={this.props.onFormToggleClicked}
            />
          )}
        </Fragment>
        <Fragment>
          {this.props.formEditToggle && (
            <FormUser
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
              className="Admin__Wrapper__List__Users"
              page={this.props.page}
            />
            {this.props.users.data && (
              <Fragment>
                {Object.keys(this.props.users.data).map((key, index) => {
                  const user = this.props.users.data[key];
                  return (
                    <Fragment key={user.id}>
                      <List
                        className="Admin__Wrapper__List__Users"
                        page={this.props.page}
                        index={index + 1}
                        last={index === this.props.users.data.length - 1}
                        onButtonDeleteClicked={_ =>
                          this.onButtonDeleteClickHandler(user.id)
                        }
                        onButtonEditClicked={_ => {
                          this.onButtonEditClickHandler(user);
                        }}
                        {...user}
                      />
                    </Fragment>
                  );
                })}
                <li className="Admin__Wrapper__Posts__List py-2">
                  <Pagination
                    onPaginateClicked={number =>
                      this.onPagniateClickHandler(number)
                    }
                    {...this.props.users}
                  />
                </li>
              </Fragment>
            )}

            {/* <li className="Admin-Posts-Content">
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
              this.props.usersDeleted.data && (
                <Fragment>
                  {Object.keys(this.props.usersDeleted.data).map(
                    (key, index) => {
                      const user = this.props.usersDeleted.data[key];
                      return (
                        <Fragment key={user.id}>
                          <List
                            className="Admin__Wrapper__List__Users"
                            type="old"
                            page={this.props.page}
                            index={index + 1}
                            last={
                              index === this.props.usersDeleted.data.length - 1
                            }
                            onButtonDeletePermanentlyClicked={_ =>
                              this.onButtonDeletePermanentlyClickHandler(
                                user.id
                              )
                            }
                            onButtonRestoreClicked={_ =>
                              this.onButtonRestoreClickHandler(user.id)
                            }
                            {...user}
                          />
                        </Fragment>
                      );
                    }
                  )}
                  <li className="Admin__Wrapper__Posts__List py-2">
                    <Pagination
                      onPaginateClicked={number =>
                        this.onPagniateClickHandler(number)
                      }
                      {...this.props.usersDeleted}
                    />
                  </li>
                </Fragment>
              )} */}
          </ul>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    users: state.users.current,
    usersDeleted: state.users.deleted
  };
};

const mapDispatchToProps = dispatch => ({
  deleteStart: id => dispatch(userDeleteStart(id)),
  deletedFetchStart: _ => dispatch(usersDeletedFetchStart()),
  deletePermanentlyStart: id => dispatch(userDeletePermanentlyStart(id)),
  deletedRestoreStart: id => dispatch(userDeletedRestoreStart(id)),
  usersFetchStart: ({ pageNumber }) =>
    dispatch(usersFetchStart({ pageNumber })),
  userEditStart: (id, user) => dispatch(userEditStart(id, user)),
  createStart: user => dispatch(userCreateStart(user)),
  userDeleteStart: id => dispatch(userDeleteStart(id)),
  usersLinkFetchStart: link => dispatch(usersLinkFetchStart(link))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(index));
