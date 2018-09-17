import React from 'react';
import TitleForm from '../../Components/Form/TitleForm';
import Input from '../../Components/Form/Details/Input';
import axios from '../../../../../../../helpers/axios.config';
import { DOMAIN } from '../../../../../../../helpers/constants';
import HelpText from '../../../../../../Details/HelpText';
import {
  addInputValidClass,
  isCreateType,
  renderTypeString
} from '../../../../../../../helpers';
import Button from '../../../../../../UI/Button';
class index extends React.Component {
  state = {
    slide: {
      name: '',
      isValidName: null,
      caption: '',
      isValidCaption: null,
      image: null
    },
    path: null
  };
  onInputImageUploadPostChangeHandler = event => {
    // const image = event.target.files[0];

    const image = event.target.files[0];

    let reader = new FileReader();
    reader.onload = e => {
      const path = e.target.result;
      this.setState(prevState => ({
        ...prevState,
        slide: {
          image
        },
        path
      }));
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  onUploadImageClickHandler = _ => {
    let formData = new FormData();
    formData.append('image', this.state.image);

    return axios
      .post('/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        return {
          data: {
            link: DOMAIN + response.data.data.image.path
          }
        };
      });
  };
  render() {
    return (
      <form className=" border rounded-0 p-3 pb-0 m-3">
        <div>
          <TitleForm
            type={this.props.type}
            page={this.props.page}
            onResetButtonClick={this.props.onResetButtonClicked}
          />
        </div>
        <div className="form-group mb-0">
          <div className="input-group my-2">
            <HelpText className="Admin__Wrapper__User__Form__notice--height mb-2">
              {/* {(isCreateType(this.props.type)
              ? this.state.slide.isValidName !== null &&
                !this.state.slide.isValidName
              : this.state.slideEdit.isValidName !== null &&
                !this.state.slideEdit.isValidName) &&
              helpTextRequire(
                'user name',
                'alphabet and at least 3 characters'
              )} */}
            </HelpText>
            <Input
              type="text"
              className={[
                'form-control',
                addInputValidClass(
                  isCreateType(this.props.type)
                    ? this.state.slide.isValidName
                    : this.state.slideEdit.isValidName
                )
              ].join(' ')}
              placeholder="Name ..."
              value={
                isCreateType(this.props.type)
                  ? this.state.slide.name
                  : this.state.slideEdit.name
              }
              // onChange={this.onInputNameChanged}
              autoFocus
            />
          </div>
          <div className="input-group my-2">
            <HelpText className="Admin__Wrapper__User__Form__notice--height mb-2">
              {/* {(isCreateType(this.props.type)
              ? this.state.slide.isValidName !== null &&
                !this.state.slide.isValidName
              : this.state.slideEdit.isValidName !== null &&
                !this.state.slideEdit.isValidName) &&
              helpTextRequire(
                'user name',
                'alphabet and at least 3 characters'
              )} */}
            </HelpText>
            <Input
              type="text"
              className={[
                'form-control',
                addInputValidClass(
                  isCreateType(this.props.type)
                    ? this.state.slide.isValidName
                    : this.state.slideEdit.isValidName
                )
              ].join(' ')}
              placeholder="Caption ..."
              value={
                isCreateType(this.props.type)
                  ? this.state.slide.name
                  : this.state.slideEdit.name
              }
              // onChange={this.onInputNameChanged}
              autoFocus
            />
          </div>
          <div className="input-group mt-2">
            <div className="custom-file h-100">
              <Input
                type="file"
                style={{ zIndex: '99' }}
                className="custom-file-input form-control rounded-0 h-100"
                onChange={this.onInputImageUploadPostChangeHandler}
                id="post-image"
                ariaDescribedby="post-image"
              />
              <label
                className="custom-file-label Admin__Image__Preview__File__Label h-100 d-flex align-items-center Text--sm"
                htmlFor="post-image"
              >
                {!!this.state.image
                  ? this.state.image.name
                  : 'Choose Image Preview'}
              </label>
            </div>
            <div className="input-group-append ">
              <span
                onClick={this.onUploadImageClickHandler}
                className={[
                  'btn Admin__Image__Preview__File__Label input-group-text h-100 d-flex align-items-center Text--sm',
                  !this.state.image && 'disabled'
                ].join(' ')}
              >
                Upload
              </span>
            </div>
          </div>
          {!!this.state.path && (
            <div className="my-3">
              <img src={this.state.path} alt="" />
            </div>
          )}
        </div>
        <div className="form-group d-flex justify-content-end mt-3">
          <Button
            type="submit"
            className={`btn btn-sm btn-success mx-1 ${
              !!!this.state.isSaveButtonAllowed ? 'cursor-not-allowed' : ''
            }`}
            disabled={!!!this.state.isSaveButtonAllowed}
          >
            {renderTypeString(this.props.type)}
          </Button>

          <Button
            type="button"
            className="btn btn-sm btn-danger mx-1"
            clicked={
              isCreateType(this.props.type)
                ? this.props.onFormToggleClicked
                : this.props.onFormEditToggleClicked
            }
          >
            cancel
          </Button>
        </div>
      </form>
    );
  }
}

export default index;
