import React, { Component } from 'react';
import Button from '../../../../Details/Button';
import HelpText from '../../../../Details/HelpText';
import Input from '../SignUp/Input';
import { helpTextRequire, addInputValidClass } from '../../../../../helpers';
import { userForm } from '../../../../../helpers/seed-data';
class index extends Component {
  state = {
    userForm: { ...userForm }
  };
  render() {
    return (
      <form action="" className="Client__Form__Sign-Up__form border bg-light ">
        <div className="border-bottom py-3 px-5 d-flex align-content-center justify-content-center">
          <h2>Sign Up</h2>
        </div>
        <div className="form-group d-flex flex-column justify-content-around mx-5 my-0 mt-1">
          <HelpText className="Client__Form__Sign-Up__form__notice m-0">
            {this.state.userForm.isValidName !== null &&
              !this.state.userForm.isValidName &&
              helpTextRequire(
                'user name',
                'alphabet and at least 3 characters'
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
            {this.state.userForm.isValidEmail !== null &&
              !this.state.userForm.isValidEmail &&
              helpTextRequire(
                'user email',
                'email format. E.g : nam@autointegrity.com.au'
              )}
          </HelpText>
          <Input
            name="email"
            type="email"
            className={addInputValidClass(this.state.userForm.isValidEmail)}
            value={this.state.userForm.email}
            onInputChange={event => this.onInputEmailChanged(event)}
          />
        </div>
        <div className="form-group d-flex flex-column justify-content-around mx-5 my-0 mt-1">
          <HelpText className="Client__Form__Sign-Up__form__notice m-0">
            {this.state.userForm.isValidPassword !== null &&
              !this.state.userForm.isValidPassword &&
              helpTextRequire(
                'user email',
                'at least 5 ASCII characters. E.g : hello@123 '
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
        <div className="form-group d-flex flex-column justify-content-around mx-5 my-0 mt-1">
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
            name="re-password"
            type="password"
            className={addInputValidClass(
              this.state.userForm.isValidRePassword &&
                this.state.userForm.password === this.state.userForm.rePassword
            )}
            onInputChange={event => this.onInputRePasswordChanged(event)}
            value={this.state.userForm.rePassword}
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
            Sign Up
          </Button>
          <Button
            type="button"
            clicked={this.props.onButtonSignUpClicked}
            className="btn btn-danger mx-2"
          >
            cancel
          </Button>
        </div>
        <hr />
        <div className="d-flex flex-column align-items-end text-muted mx-5 pb-3">
          <a href="">
            <span>Forget Password ?</span>
          </a>
          <a href="">
            <span>Wanna Log In ?</span>
          </a>
        </div>
      </form>
    );
  }
}

export default index;
