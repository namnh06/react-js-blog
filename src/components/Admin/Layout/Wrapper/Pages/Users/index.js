import { connect } from 'react-redux';
import React from 'react';

import PageContent from '../Components/PageContent';
import './styles.css';
import {
  userAddStart,
  userEditStart,
  userDeleteStart
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
import { ADMIN_PAGES_NAME } from '../../../../../../helpers/constants';

const index = class extends React.Component {
  state = {
    addToggle: false,
    editToggle: false,
    userWillBeCreated,
    userWillBeEdited
  };

  onAddToggleClicked = () => {
    this.setState(prevState => ({
      addToggle: !prevState.addToggle
    }));
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
      <PageContent page={ADMIN_PAGES_NAME.USERS} />
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
      //   </div>
      // </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => ({
  userEditStart: (id, user) => dispatch(userEditStart(id, user)),
  userAddStart: user => dispatch(userAddStart(user)),
  userDeleteStart: id => dispatch(userDeleteStart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
