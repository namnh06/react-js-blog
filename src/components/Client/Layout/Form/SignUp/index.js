import React, { Component } from 'react';

import FormGroup from '../Details/FormGroup';
import HelpText from '../../../../Details/HelpText';
import Input from '../Details/Input';
import Title from '../Details/Title';
import BottomSection from '../Details/BottomSection';
import ButtonSection from '../Details/ButtonSection';
import ContentSection from '../Details/ContentSection';
import {
  helpTextRequire,
  isValidEmail,
  addInputValidClass,
  isValidName,
  isValidPassword,
  textRequireName
} from '../../../../../helpers';

import { userForm } from '../../../../../helpers/seed-data';
class index extends Component {
  state = {
    userForm: {
      ...userForm
    }
  };

  onInputNameChanged = event => {
    const name = event.target.value;
    this.setState(prevState => {
      const isSaveButtonAllowed =
        !!isValidName(name) &&
        !!prevState.userForm.isValidEmail &&
        !!prevState.userForm.isValidPassword &&
        prevState.userForm.password === prevState.userForm.rePassword;

      return {
        userForm: {
          ...prevState.userForm,
          name,
          isValidName: isValidName(name)
        },
        isSaveButtonAllowed
      };
    });
  };

  onInputEmailChanged = event => {
    const email = event.target.value;
    this.setState(prevState => {
      const isSaveButtonAllowed =
        !!isValidEmail(email) &&
        !!prevState.userForm.isValidName &&
        !!prevState.userForm.isValidPassword &&
        prevState.userForm.password === prevState.userForm.rePassword;
      return {
        userForm: {
          ...prevState.userForm,
          email,
          isValidEmail: isValidEmail(email)
        },
        isSaveButtonAllowed
      };
    });
  };

  onInputPasswordChanged = event => {
    const password = event.target.value;
    this.setState(prevState => {
      const isSaveButtonAllowed =
        !!isValidPassword(password) &&
        !!prevState.userForm.isValidName &&
        !!prevState.userForm.isValidEmail &&
        password === prevState.userForm.rePassword;
      return {
        userForm: {
          ...prevState.userForm,
          password,
          isValidPassword: isValidPassword(password)
        },
        isSaveButtonAllowed
      };
    });
  };

  onInputRePasswordChanged = event => {
    const rePassword = event.target.value;
    this.setState(prevState => {
      const isSaveButtonAllowed =
        !!isValidPassword(rePassword) &&
        !!prevState.userForm.isValidName &&
        !!prevState.userForm.isValidEmail &&
        prevState.userForm.password === rePassword;
      return {
        userForm: {
          ...prevState.userForm,
          rePassword,
          isValidRePassword: isValidPassword(rePassword)
        },
        isSaveButtonAllowed
      };
    });
  };

  render() {
    return (
      <form action="" className="Client__Form__form--width border bg-light ">
        <Title>Sign Up</Title>
        <ContentSection>
          <FormGroup>
            <HelpText className="Client__Form__Sign-Up__form__notice m-0">
              {this.state.userForm.isValidName !== null &&
                !this.state.userForm.isValidName &&
                textRequireName()}
            </HelpText>
            <Input
              name="Name"
              type="text"
              className={addInputValidClass(this.state.userForm.isValidName)}
              value={this.state.userForm.name}
              onInputChange={event => this.onInputNameChanged(event)}
            />
          </FormGroup>
          <FormGroup>
            <HelpText className="Client__Form__Sign-Up__form__notice m-0">
              {this.state.userForm.isValidEmail !== null &&
                !this.state.userForm.isValidEmail &&
                helpTextRequire(
                  'user email',
                  'email format. E.g : nam@autointegrity.com.au'
                )}
            </HelpText>
            <Input
              name="Email"
              type="email"
              className={addInputValidClass(this.state.userForm.isValidEmail)}
              value={this.state.userForm.email}
              onInputChange={event => this.onInputEmailChanged(event)}
            />
          </FormGroup>
          <FormGroup>
            <HelpText className="Client__Form__Sign-Up__form__notice m-0">
              {this.state.userForm.isValidPassword !== null &&
                !this.state.userForm.isValidPassword &&
                helpTextRequire(
                  'user email',
                  'at least 5 ASCII characters. E.g : hello@123 '
                )}
            </HelpText>
            <Input
              name="Password"
              type="password"
              className={addInputValidClass(
                this.state.userForm.isValidPassword
              )}
              onInputChange={event => this.onInputPasswordChanged(event)}
              value={this.state.userForm.password}
            />
          </FormGroup>
          <FormGroup>
            <HelpText className="Client__Form__Sign-Up__form__notice m-0">
              {this.state.userForm.isValidRePassword !== null &&
                (!this.state.userForm.isValidRePassword ||
                  this.state.userForm.password !==
                    this.state.userForm.rePassword) &&
                helpTextRequire(
                  'user email',
                  'at least 5 ASCII characters & same to password. E.g : hello@123 '
                )}
            </HelpText>
            <Input
              name="Re-password"
              type="password"
              className={addInputValidClass(
                this.state.userForm.isValidRePassword &&
                  this.state.userForm.password ===
                    this.state.userForm.rePassword
              )}
              onInputChange={event => this.onInputRePasswordChanged(event)}
              value={this.state.userForm.rePassword}
            />
          </FormGroup>
        </ContentSection>

        <ButtonSection
          isSaveButtonAllowed={this.state.isSaveButtonAllowed}
          onClicked={this.props.onButtonSignUpClicked}
        >
          sign up
        </ButtonSection>
        {/* <hr /> */}
        <BottomSection onClicked={this.props.onButtonLogInClicked}>
          Wanna Sign In ?
        </BottomSection>
        {/* <div className="d-flex flex-column align-items-end text-muted mx-3 pb-3">
          <FakeLink>Forget Password ?</FakeLink>
          <FakeLink clicked={this.props.onButtonLogInClicked}>
            Wanna Log In ?
          </FakeLink>
        </div> */}
      </form>
    );
  }
}

export default index;
