import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import './styles.css';
import {
  userAddStart,
  userEditStart,
  userDeleteStart,
  usersDeletedFetchStart,
  userDeletePermanentlyStart,
  userDeletedRestoreStart
} from '../../../../../../store/actions/admin/users.action';

import {
  isValidEmail,
  isValidPassword,
  isValidName
} from '../../../../../../helpers';

import {
  userWillBeCreated,
  userWillBeEdited
} from '../../../../../../helpers/seed-data';
import Title from '../Components/Title';
import Button from '../../../../../UI/Button';
import Icon from '../../../../../UI/Icon';
import Header from '../Components/Header';
import List from '../Components/List';
import ListOld from '../Components/ListOld/Post';
import {} from '../../../../../../store/actions/posts.action';
import FormPost from '../Components/Form/Post';
import {
  iconClass,
  displayStringTemporary,
  hideStringTemporary
} from '../../../../../../helpers';

import './styles.css';
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

  onUserWillBeCreatedSubmitHandler = e => {
    e.preventDefault();

    const { name, email, password } = this.state.userWillBeCreated;
    this.state.userWillBeCreated.validName &&
      this.state.userWillBeCreated.validEmail &&
      this.state.userWillBeCreated.validPassword &&
      this.props.userAddStart({
        name,
        email,
        password
      });

    this.setState(prevState => ({
      userWillBeCreated: {
        ...prevState.userWillBeCreated,
        /**
         * SET DEFAULT DATA
         */
        userWillBeCreated
      }
    }));

    this.onAddToggleClicked();
  };

  onCreatePasswordSecureHandler = () => {
    this.setState(prevState => ({
      userWillBeCreated: {
        ...prevState.userWillBeCreated,
        passwordSecure: !prevState.userWillBeCreated.passwordSecure
      }
    }));
  };

  onCreateInputNameChange = event => {
    const name = event.target.value;
    this.setState(prevState => ({
      userWillBeCreated: {
        ...prevState.userWillBeCreated,
        name,
        validName: isValidName(name)
      }
    }));
  };

  onCreateInputEmailChange = event => {
    const email = event.target.value.trim();
    this.setState(prevState => ({
      userWillBeCreated: {
        ...prevState.userWillBeCreated,
        email,
        validEmail: isValidEmail(email)
      }
    }));
  };

  onCreateInputPasswordChange = event => {
    const password = event.target.value.trim();
    this.setState(prevState => ({
      userWillBeCreated: {
        ...prevState.userWillBeCreated,
        password,
        validPassword: isValidPassword(password)
      }
    }));
  };

  /* EDIT SECTION */

  onEditToggleClicked = user => {
    if (user && user.id && user.name && user.email) {
      const { id, name, email } = user;
      if (id && this.state.userWillBeEdited.id !== id) {
        this.setState(prevState => ({
          editToggle: true,
          userWillBeEdited: {
            ...prevState.userWillBeEdited,
            id,
            name,
            validName: isValidName(name),
            email,
            validEmail: isValidEmail(email)
          }
        }));
      }
    } else {
      /**
       * SET DEFAULT DATA
       */
      this.setState(prevState => ({
        editToggle: !prevState.editToggle,
        userWillBeEdited
      }));
    }
  };

  onEditPasswordSecureHandler = () => {};

  onEditInputNameChange = event => {
    const name = event.target.value;
    this.setState(prevState => ({
      userWillBeEdited: {
        ...prevState.userWillBeEdited,
        name,
        validName: isValidName(name)
      }
    }));
  };

  onEditInputPasswordChange = event => {
    const password = event.target.value.trim();
    this.setState(prevState => ({
      userWillBeEdited: {
        ...prevState.userWillBeEdited,
        password,
        validPassword: isValidPassword(password)
      }
    }));
  };

  onUserWillBeEditedSubmitHandler = event => {
    event.preventDefault();

    const { name, password } = this.state.userWillBeEdited;

    this.state.userWillBeEdited.validName &&
      this.state.userWillBeEdited.validEmail &&
      this.state.userWillBeEdited.validPassword &&
      this.props.userEditStart(this.state.userWillBeEdited.id, {
        name,
        password
      });

    this.setState(prevState => ({
      userWillBeEdited: {
        ...prevState.userWillBeEdited,
        /**
         * SET DEFAULT DATA
         */
        userWillBeEdited
      }
    }));

    this.onEditToggleClicked();
  };

  onDeleteButtonClickHandler = id => {
    this.props.userDeleteStart(id);
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

          {/* {this.props.formToggle && (
            <div>
              <div>
                <FormPost
                  type={POST_CREATE_START}
                  page={this.props.page}
                  onFormToggleClicked={this.props.onFormToggleClicked}
                />
              </div>
            </div>
          )} */}

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
                  this.props.items.length === 0 ? '' : 'border-bottom-0'
                }
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
                    ? hideStringTemporary('posts')
                    : displayStringTemporary('posts')}
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
      </div>

      // <PageContent
      //   page={ADMIN_PAGES_NAME.USERS}
      //   items={this.props.users}
      //   formToggle={this.props.formToggle}
      //   onFormToggleClicked={_ => this.props.onFormToggleClicked()}
      // />
      // <div className="col-10">
      //   <div className="mt-5 border border-style-custom">
      //     <div className="d-flex flex-row justify-content-between align-items-center border-bottom p-3">
      //       <Title className="mb-0">users</Title>
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

      //     <div
      //       className={this.state.addToggle ? 'user__form__create--in' : null}
      //     >
      //       {this.state.addToggle && (
      //         <div className="m-3">
      //           <UserForm
      //             {...this.state.userWillBeCreated}
      //             onToggleClicked={this.onAddToggleClicked}
      //             onPasswordSecureHandler={this.onCreatePasswordSecureHandler}
      //             onSubmitHandler={this.onUserWillBeCreatedSubmitHandler}
      //             onInputNameChange={this.onCreateInputNameChange}
      //             onInputEmailChange={this.onCreateInputEmailChange}
      //             onInputPasswordChange={this.onCreateInputPasswordChange}
      //           />
      //         </div>
      //       )}
      //     </div>

      //     <div>
      //       {this.state.editToggle && (
      //         <div className="m-3">
      //           <UserForm
      //             {...this.state.userWillBeEdited}
      //             onToggleClicked={this.onEditToggleClicked}
      //             onPasswordSecureHandler={this.onEditPasswordSecureHandler}
      //             onSubmitHandler={this.onUserWillBeEditedSubmitHandler}
      //             onInputNameChange={this.onEditInputNameChange}
      //             onInputPasswordChange={this.onEditInputPasswordChange}
      //             readOnly
      //           />
      //         </div>
      //       )}
      //     </div>

      //     <div className="m-3">
      //       <ul className="list-unstyled">
      //         <HeaderListUser />
      //         {this.props.users &&
      //           Object.keys(this.props.users).map((key, index) => {
      //             return (
      //               <Content
      //                 onEditButtonClicked={_ =>
      //                   this.onEditToggleClicked(this.props.users[key])
      //                 }
      //                 index={++index}
      //                 deleteButton={id => this.onDeleteButtonClickHandler(id)}
      //                 key={this.props.users[key].id}
      //                 {...this.props.users[key]}
      //               />
      //             );
      //           })}
      //       </ul>
      //     </div>

      // </div>
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
  userAddStart: user => dispatch(userAddStart(user)),
  userDeleteStart: id => dispatch(userDeleteStart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
