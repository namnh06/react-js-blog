import React from 'react';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import HelpText from '../../UI/HelpText';
import {
  showHelpTextLoginForm,
  textRequireName,
  textRequireEmail,
  textRequirePassword,
  userFormTitle,
  passwordPlaceholderByType
} from '../../../helpers';
import './styles.css';
import { USER_ADD_START } from '../../../helpers/constants';
const index = props => {
  return (
    <form
      onSubmit={props.onSubmitHandler}
      className="user__form border rounded-0 p-3 pb-0"
    >
      <div className="form-group d-flex justify-content-between border-bottom p-2 m-0">
        <h5 className="text-uppercase">{userFormTitle(props.type)}</h5>
        {props.type === USER_ADD_START && (
          <Button type="reset" className="btn btn-sm btn-warning mx-1">
            reset
          </Button>
        )}
      </div>

      <div className="form-group mb-0">
        <HelpText className="user__form__notice--height m-0 mb-2">
          {showHelpTextLoginForm(
            props.name.length,
            props.validName,
            textRequireName()
          )}
        </HelpText>
        <div className="input-group">
          <Input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={props.onInputNameChange}
            value={props.name}
            autoFocus
          />
        </div>
      </div>

      <div className="form-group mb-0">
        <HelpText className="user__form__notice--height m-0 mb-2">
          {showHelpTextLoginForm(
            props.email.length,
            props.validEmail,
            textRequireEmail()
          )}
        </HelpText>
        <div className="input-group">
          <Input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={props.onInputEmailChange}
            value={props.email}
            readOnly={props.readOnly}
          />
        </div>
      </div>

      <div className="form-group mb-0 ">
        <HelpText className="user__form__notice--height m-0 mb-2">
          {showHelpTextLoginForm(
            props.password.length,
            props.validPassword,
            textRequirePassword()
          )}
        </HelpText>
        <div className="input-group">
          <Input
            type={props.passwordSecure ? 'password' : 'text'}
            className="form-control"
            placeholder={passwordPlaceholderByType(props.type)}
            onChange={props.onInputPasswordChange}
            value={props.password}
          />
          <div className="input-group-append ">
            <span
              className="input-group-text text-muted cursor-pointer rounded-0"
              onClick={props.onPasswordSecureHandler}
            >
              {props.passwordSecure ? 'show' : 'hide'}
            </span>
          </div>
        </div>
      </div>
      <div className="form-group d-flex justify-content-end mt-3">
        <Button
          disabled={
            !props.validName || !props.validEmail || !props.validPassword
          }
          type="submit"
          className={`btn btn-sm btn-success mx-1 ${(!props.validName ||
            !props.validEmail ||
            !props.validPassword) &&
            'cursor-not-allowed'}`}
        >
          save
        </Button>
        <Button
          type="button"
          className="btn btn-sm btn-danger mx-1"
          clicked={props.onToggleClicked}
        >
          cancel
        </Button>
      </div>
    </form>
  );
};

export default index;
