import React from 'react';
import Input from '../../../../../../../../UI/Input';
import Button from '../../../../../../../../UI/Button';
import HelpText from '../../../../../../../../UI/HelpText';

import './styles.css';
import { POST_CREATE_START } from '../../../../../../../../../helpers/constants';

import EditorComponent from '../../../../../../../../ReactDraftWYSIWYG';
import TextArea from '../../../../../../../../UI/TextArea';

const index = props => {
  return (
    <form
      onSubmit={props.onSubmitHandler}
      className="Post-form border rounded-0 p-3 pb-0 m-3"
    >
      <div className="form-group d-flex justify-content-between border-bottom p-2 m-0">
        <h5 className="text-uppercase">AA</h5>
        {props.type === POST_CREATE_START && (
          <Button
            type="reset"
            className="btn btn-sm btn-warning mx-1"
            clicked={props.onResetButtonClicked}
          >
            reset
          </Button>
        )}
      </div>

      <div className="form-group mb-0">
        <HelpText className="Post-form__notice--height m-0 mb-2">
          {/* {showHelpTextLoginForm(
            props.name.length,
            props.validName,
            textRequireName()
          )} */}
        </HelpText>
        <div className="input-group">
          <Input
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={props.onTitleChange}
            value={props.title}
            autoFocus
          />
        </div>
      </div>

      <div className="form-group mb-0">
        <HelpText className="Post-form__notice--height m-0 mb-2">
          {/* {showHelpTextLoginForm(
            props.email.length,
            props.validEmail,
            textRequireEmail()
          )} */}
        </HelpText>
        <div className="input-group">
          {/* <Input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={props.onInputEmailChange}
            value={props.email}
            readOnly={props.readOnly}
          /> */}
          <TextArea
            className="form-control rounded-0"
            placeholder="Description"
            onChange={props.onDescriptionChange}
            value={props.description}
          />
        </div>
      </div>

      <div className="form-group mb-0">
        <HelpText className="Post-form__notice--height m-0 mb-2">
          {/* {showHelpTextLoginForm(
            props.password.length,
            props.validPassword,
            textRequirePassword()
          )} */}
        </HelpText>
        <div className="input-group">
          <EditorComponent onUpdateTextEditor={props.onUpdateTextEditor} />
        </div>
      </div>

      <div className="form-group d-flex justify-content-end mt-3">
        <Button
          type="submit"
          className={`btn btn-sm btn-success mx-1 ${(!props.validName ||
            !props.validEmail ||
            !props.validPassword) &&
            'cursor-not-allowed'}`}
        >
          post
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
