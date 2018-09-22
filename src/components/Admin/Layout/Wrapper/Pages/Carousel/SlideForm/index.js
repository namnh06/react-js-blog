import React from 'react';
import TitleForm from '../../Components/Form/TitleForm';
import Input from '../../Components/Form/Details/Input';

import { connect } from 'react-redux';
import HelpText from '../../../../../../Details/HelpText';
import {
  addInputValidClass,
  isCreateType,
  renderTypeString,
  isValidName
} from '../../../../../../../helpers';
import Button from '../../../../../../UI/Button';
import {
  slideCreateStart,
  slideUpdateStart
} from '../../../../../../../store/actions/slides.action';
import { HOST } from '../../../../../../../helpers/constants';
class index extends React.Component {
  state = {
    slide: {
      name: '',
      isValidName: null,
      caption: '',
      isValidCaption: null,
      image: null
    },
    slideFormEdit: {
      ...this.props.slideFormEdit
    },
    path: null,
    isSaveButtonAllowed: null
  };
  // componentDidMount() {
  //   if (!!this.props.slideFormEdit) {
  //     this.setState({
  //       slideFormEdit: { ...this.props.slideFormEdit }
  //     });
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    return isCreateType(this.props.type)
      ? null
      : this.checkChangeFormEdit(nextProps);
  }

  checkChangeFormEdit = nextProps => {
    if (this.props.slideFormEdit.id !== nextProps.slideFormEdit.id) {
      this.setState(prevState => ({
        ...prevState,
        slideFormEdit: {
          ...nextProps.slideFormEdit
        }
      }));
    }
  };
  onInputImageUploadChangeHandler = event => {
    const image = event.target.files[0];
    let reader = new FileReader();
    reader.onload = e => {
      const path = e.target.result;
      this.setState(prevState => {
        const isSaveButtonAllowed =
          !!image &&
          !!prevState.slide.isValidCaption &&
          !!prevState.slide.isValidName;
        return {
          slide: {
            ...prevState.slide,
            image
          },
          path,
          isSaveButtonAllowed
        };
      });
    };
    reader.readAsDataURL(image);
  };

  onInputNameChanged = event => {
    const name = event.target.value;

    if (isCreateType(this.props.type)) {
      return this.setState(prevState => {
        const isSaveButtonAllowed =
          !!isValidName(name) &&
          !!prevState.slide.isValidCaption &&
          !!prevState.slide.image;

        return {
          slide: {
            ...prevState.slide,
            name,
            isValidName: isValidName(name)
          },
          isSaveButtonAllowed
        };
      });
    }
    return this.setState(prevState => {
      const isSaveButtonAllowed =
        !!isValidName(name) && !!prevState.slideFormEdit.isValidCaption;
      return {
        slideFormEdit: {
          ...prevState.slideFormEdit,
          name,
          isValidName: isValidName(name)
        },
        isSaveButtonAllowed
      };
    });
  };

  onInputCaptionChanged = event => {
    const caption = event.target.value;
    if (isCreateType(this.props.type)) {
      return this.setState(prevState => {
        const isSaveButtonAllowed =
          !!isValidName(caption) &&
          !!prevState.slide.isValidName &&
          !!prevState.slide.image;

        return {
          slide: {
            ...prevState.slide,
            caption,
            isValidCaption: isValidName(caption)
          },
          isSaveButtonAllowed
        };
      });
    }
    return this.setState(prevState => {
      const isSaveButtonAllowed =
        !!isValidName(caption) && !!prevState.slideFormEdit.isValidName;
      return {
        slideFormEdit: {
          ...prevState.slideFormEdit,
          caption,
          isValidCaption: isValidName(caption)
        },
        isSaveButtonAllowed
      };
    });
  };

  onFormSubmitHandler = event => {
    event.preventDefault();
    if (!!this.state.isSaveButtonAllowed) {
      let formData = new FormData();
      if (isCreateType(this.props.type)) {
        formData.append('image', this.state.slide.image);

        const slide = {
          ...this.state.slide
        };

        formData.append('name', slide.name);
        formData.append('caption', slide.caption);
        this.props.slideCreateStart(formData);
        return this.props.onFormToggleClicked();
      }
      const slide = {
        ...this.state.slideFormEdit
      };

      formData.append('name', slide.name);
      formData.append('caption', slide.caption);
      formData.append('_method', 'PUT');
      this.props.slideUpdateStart(slide.id, formData);
      return this.props.onFormEditToggleClicked();
    }
  };
  render() {
    return (
      <form
        className=" border rounded-0 p-3 pb-0 m-3"
        onSubmit={this.onFormSubmitHandler}
      >
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
                    : this.state.slideFormEdit.isValidName
                )
              ].join(' ')}
              placeholder="Name ..."
              value={
                isCreateType(this.props.type)
                  ? this.state.slide.name
                  : this.state.slideFormEdit.name
              }
              onChange={this.onInputNameChanged}
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
                    ? this.state.slide.isValidCaption
                    : this.state.slideFormEdit.isValidCaption
                )
              ].join(' ')}
              placeholder="Caption ..."
              value={
                isCreateType(this.props.type)
                  ? this.state.slide.caption
                  : this.state.slideFormEdit.caption
              }
              onChange={this.onInputCaptionChanged}
            />
          </div>
          <div className="input-group mt-2">
            <div className="custom-file h-100">
              <Input
                type="file"
                style={{ zIndex: '99' }}
                className="custom-file-input form-control rounded-0 h-100"
                onChange={this.onInputImageUploadChangeHandler}
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
            {/* <div className="input-group-append ">
              <span
                onClick={this.onUploadImageClickHandler}
                className={[
                  'btn Admin__Image__Preview__File__Label input-group-text h-100 d-flex align-items-center Text--sm',
                  !this.state.image && 'disabled'
                ].join(' ')}
              >
                Upload
              </span>
            </div> */}
          </div>

          {(!!this.state.path || !!this.state.slideFormEdit) && (
            <div className="my-3">
              <img
                className="w-100"
                src={
                  isCreateType(this.props.type)
                    ? this.state.path
                    : HOST + this.props.slideFormEdit.images[0].path
                }
                alt=""
              />
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    slideCreateStart: data => dispatch(slideCreateStart(data)),
    slideUpdateStart: (id, data) => dispatch(slideUpdateStart(id, data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
