import React, { Component } from 'react';

import FormGroup from '../Details/FormGroup';
import HelpText from '../../../../Details/HelpText';
import Input from '../Details/Input';
import { withCookies, Cookies } from 'react-cookie';
import {
  helpTextRequire,
  addInputValidClass,
  isValidPassword,
  isValidEmail,
  isValidName
} from '../../../../../helpers';
import { userForm } from '../../../../../helpers/seed-data';
import Axios from 'axios';

import moment from 'moment';
import Title from '../Details/Title';
import BottomSection from '../Details/BottomSection';
import ButtonSection from '../Details/ButtonSection';
import ContentSection from '../Details/ContentSection';
class index extends Component {
  state = {
    userForm: { ...userForm }
  };

  onInputEmailChanged = event => {
    const email = event.target.value;
    this.setState(prevState => {
      const isSaveButtonAllowed =
        !!isValidEmail(email) && !!prevState.userForm.isValidPassword;

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
  onInputNameChanged = event => {
    const name = event.target.value;
    this.setState(prevState => {
      const isSaveButtonAllowed =
        !!isValidName(name) && !!prevState.userForm.isValidPassword;

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

  onInputPasswordChanged = event => {
    const password = event.target.value;
    this.setState(prevState => {
      const isSaveButtonAllowed =
        !!isValidPassword(password) && !!prevState.userForm.isValidEmail;

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

  onSubmittedHandler = event => {
    event.preventDefault();
    const cookies = new Cookies();

    const {
      isValidEmail,
      isValidPassword,
      name,
      password
    } = this.state.userForm;
    const data = `<clientRequest><action>login</action><clientData><UserName>${name}</UserName><Password>${password}</Password><isRememberMe>0</isRememberMe></clientData></clientRequest>`;
    if (isValidEmail && isValidPassword) {
      const time = new Date().getTime();
      Axios({
        method: 'post',
        url: `https://crashzone.com.au//a/server.aspx?time=${time}`,
        withCredentials: false,
        data,
        headers: {
          'content-type': 'application/xml;charset=UTF-8',
          withCredentials: 'true'
        }
      }).then(response => {
        const data = response.data;
        const isSuccess = '<isSuccess>0</isSuccess>';
        const days = moment()
          .add(30, 'days')
          .toDate();
        if (data.includes(isSuccess)) {
          cookies.set('czUserName', name, {
            expires: days
          });
          cookies.set('czPassword', password, {
            expires: days
          });
          window.location.replace('https://crashzone.com.au/a/estimate');
        }
      });
    }
  };

  render() {
    return (
      <form
        action=""
        className="Client__Form__form--width d-flex flex-column border bg-light"
        onSubmit={event => this.onSubmittedHandler(event)}
      >
        <Title>sign in</Title>
        <ContentSection>
          <FormGroup>
            <HelpText className="Client__Form__Sign-Up__form__notice m-0">
              {this.state.userForm.isValidEmail !== null &&
                !this.state.userForm.isValidEmail &&
                helpTextRequire('email', 'alphabet and at least 2 characters')}
            </HelpText>

            <Input
              name="Email"
              type="text"
              id="LoginDiv_UserName"
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
                  'at least 3 ASCII characters. E.g : hello@123 '
                )}
            </HelpText>

            <Input
              name="Password"
              type="password"
              id="LoginDiv_Password"
              className={addInputValidClass(
                this.state.userForm.isValidPassword
              )}
              onInputChange={event => this.onInputPasswordChanged(event)}
              value={this.state.userForm.password}
            />
          </FormGroup>

          <FormGroup className="mt-5">
            <div className="form-check px-0">
              <label
                className="d-flex align-items-center"
                htmlFor="chkRememberMe"
              >
                <input
                  className=""
                  name="remember"
                  type="checkbox"
                  id="chkRememberMe"
                />
                <small className="pl-2">Remember me ?</small>
              </label>
            </div>
          </FormGroup>
        </ContentSection>

        <ButtonSection
          isSaveButtonAllowed={this.state.isSaveButtonAllowed}
          onClicked={this.props.onButtonLogInClicked}
        >
          log in
        </ButtonSection>

        <BottomSection onClicked={this.props.onButtonSignUpClicked}>
          Wanna Sign Up ?
        </BottomSection>
      </form>
    );
  }
}

export default withCookies(index);
