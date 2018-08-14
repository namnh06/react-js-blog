import React, { Component } from 'react';
import Button from '../../../../Details/Button';
import HelpText from '../../../../Details/HelpText';
import Input from '../SignUp/Input';
import {
  helpTextRequire,
  addInputValidClass,
  isValidEmail,
  isValidPassword,
  isValidName
} from '../../../../../helpers';
import { userForm } from '../../../../../helpers/seed-data';
import Axios from 'axios';
import FakeLink from '../../../../Details/FakeLink';
class index extends Component {
  state = {
    userForm: { ...userForm }
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
        !!isValidPassword(password) && !!prevState.userForm.isValidName;

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
    console.log('waiting for Chi');
    // const {
    //   isValidName,
    //   isValidPassword,
    //   name,
    //   password
    // } = this.state.userForm;
    // const data = `<clientRequest><action>login</action><clientData><UserName>${name}</UserName><Password>${password}</Password><isRememberMe>0</isRememberMe></clientData></clientRequest>`;
    // if (isValidName && isValidPassword) {
    //   const time = new Date().getTime();
    //   Axios({
    //     method: 'post',
    //     url: `https://crashzone.com.au//a/server.aspx?time=${time}`,
    //     withCredentials: false,
    //     data,
    //     headers: {
    //       'content-type': 'application/xml;charset=UTF-8',
    //       Cookie:
    //         'ASP.NET_SessionId=2crcm5fwzzafbgny4hvpdojr; czRememberMe=0; czUserName=; czPassword=; __utma=34326387.474724120.1534216391.1534216391.1534216391.1; __utmb=34326387; __utmc=34326387; __utmz=34326387.1534216391.1.1.utmccn=(direct)|utmcsr=(direct)|utmcmd=(none)',
    //       withCredentials: 'true'
    //     }
    //   }).then(response => {
    //     console.log(response);
    //   });
    // }
  };

  render() {
    return (
      <form
        action=""
        className="Client__Form__Sign-Up__form border bg-light"
        onSubmit={event => this.onSubmittedHandler(event)}
      >
        <div className="border-bottom py-3 px-5 d-flex align-content-center justify-content-center ">
          <h2 className="text-uppercase">log in</h2>
        </div>

        <div className="form-group d-flex flex-column justify-content-around mx-5 my-0 mt-1">
          <HelpText className="Client__Form__Sign-Up__form__notice m-0">
            {this.state.userForm.isValidName !== null &&
              !this.state.userForm.isValidName &&
              helpTextRequire(
                'user name',
                'alphabet and at least 2 characters'
              )}
          </HelpText>
          <Input
            name="name"
            type="text"
            className={addInputValidClass(this.state.userForm.isValidName)}
            value={this.state.userForm.name}
            onInputChange={event => this.onInputNameChanged(event)}
          />
        </div>
        <div className="form-group d-flex flex-column justify-content-around mx-5 my-0 mt-1">
          <HelpText className="Client__Form__Sign-Up__form__notice m-0">
            {this.state.userForm.isValidPassword !== null &&
              !this.state.userForm.isValidPassword &&
              helpTextRequire(
                'user email',
                'at least 3 ASCII characters. E.g : hello@123 '
              )}
          </HelpText>
          <Input
            name="password"
            type="password"
            className={addInputValidClass(this.state.userForm.isValidPassword)}
            onInputChange={event => this.onInputPasswordChanged(event)}
            value={this.state.userForm.password}
          />
        </div>

        <div className="d-flex justify-content-center py-3">
          <Button
            type="submit"
            className={`btn btn-sm btn-success mx-2 ${
              !!!this.state.isSaveButtonAllowed ? 'cursor-not-allowed' : ''
            }`}
            disabled={!!!this.state.isSaveButtonAllowed}
          >
            Log In
          </Button>
          <Button
            type="button"
            clicked={this.props.onButtonLogInClicked}
            className="btn btn-danger mx-2"
          >
            cancel
          </Button>
        </div>
        <hr />
        <div className="d-flex flex-column align-items-end text-muted mx-5 pb-3">
          <FakeLink>Forget Password ?</FakeLink>

          <FakeLink clicked={this.props.onButtonSignUpClicked}>
            Wanna Sign Up ?
          </FakeLink>
        </div>
      </form>
    );
  }
}

export default index;
