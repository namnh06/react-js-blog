import React, { Component } from 'react';
import Input from '../../Form/Details/Input';
import Button from '../../../../../../../UI/Button';
import HelpText from '../../Form/Details/HelpText';
import { connect } from 'react-redux';
import './styles.css';

import validator from 'validator';
import EditorComponent from './ReactDraftWYSIWYG';
import TextArea from '../../../../../../../UI/TextArea';
import {
  renderTypeString,
  isCreateType,
  helpTextRequire,
  addInputValidClass,
  isValidTitle,
  isValidDescription,
  pushDataToArray,
  removeDuplicateObjectInArrayByProperty,
  removeDataFromArrayByProperty,
  unshiftDataToArray
} from '../../../../../../../../helpers';
import { postForm, tempData } from '../../../../../../../../helpers/seed-data';
import { postCreateStart } from '../../../../../../../../store/actions/posts.action';

import Figure from './Figure';
class index extends Component {
  state = {
    postForm: {
      ...postForm
    },
    postFormEdit: {
      ...this.props.postFormEdit
    },
    isSaveButtonAllowed: null,
    tempData
  };

  onInputTitlePostChangeHandler = event => {
    const title = event.target.value;

    if (isCreateType(this.props.type)) {
      this.setState(prevState => {
        const isSaveButtonAllowed =
          !!isValidTitle(title) &&
          !!prevState.postForm.isValidDescription &&
          !!prevState.postForm.isValidContent;

        return {
          postForm: {
            ...prevState.postForm,
            title,
            isValidTitle: isValidTitle(title)
          },
          isSaveButtonAllowed
        };
      });
    } else {
      this.setState(prevState => ({
        postFormEdit: {
          ...prevState.postFormEdit,
          title,
          isValidTitle: isValidTitle(title)
        }
      }));
    }
  };

  onInputDescriptionPostChangeHandler = event => {
    const description = event.target.value;

    if (isCreateType(this.props.type)) {
      this.setState(prevState => {
        const isSaveButtonAllowed =
          !!isValidDescription(description) &&
          !!prevState.postForm.isValidTitle &&
          !!prevState.postForm.isValidContent;

        return {
          postForm: {
            ...prevState.postForm,
            description,
            isValidDescription: isValidDescription(description)
          },
          isSaveButtonAllowed
        };
      });
    } else {
      this.setState(prevState => ({
        postFormEdit: {
          ...prevState.postFormEdit,
          description,
          isValidDescription: isValidDescription(description)
        }
      }));
    }
  };

  onInputTextEditorPostChangeHandler = html => {
    const content = html;
    if (isCreateType(this.props.type)) {
      this.setState(prevState => {
        const isSaveButtonAllowed =
          !validator.isEmpty(content) &&
          !!prevState.postForm.isValidDescription &&
          !!prevState.postForm.isValidTitle;

        return {
          postForm: {
            ...prevState.postForm,
            content,
            isValidContent: !validator.isEmpty(content)
          },
          isSaveButtonAllowed
        };
      });
    } else {
      this.setState(prevState => ({
        postFormEdit: {
          ...prevState.postFormEdit,
          content,
          isValidContent: !validator.isEmpty(content)
        }
      }));
    }
  };

  onInputImageUploadPostChangeHandler = event => {
    const image = event.target.files[0];

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState(prevState => {
          const imagesArray = pushDataToArray(prevState.tempData.images, {
            path: e.target.result,
            data: image
          });

          const images = removeDuplicateObjectInArrayByProperty(
            imagesArray,
            'path'
          );

          return {
            ...prevState.tempData,
            tempData: {
              images
            }
          };
        });
      };

      reader.readAsDataURL(event.target.files[0]);
    }
    // if (isCreateType(this.props.type)) {
    //   this.setState(prevState => ({
    //     postForm: {
    //       ...prevState.postForm,
    //       image
    //     }
    //   }));
    // } else {
    //   this.setState(prevState => ({
    //     postFormEdit: {
    //       ...prevState.postFormEdit,
    //       image
    //     }
    //   }));
    // }
  };

  onButtonRemoveImageClickHandler = path => {
    const data = path;
    this.setState(prevState => {
      const images = removeDataFromArrayByProperty(
        prevState.tempData.images,
        'path',
        data
      );
      return {
        ...prevState.tempData,
        tempData: {
          images
        }
      };
    });
  };

  onButtonMakeMainImageClickHandler = (image, index) => {
    if (index !== 0) {
      this.setState(prevState => {
        const imagesArray = unshiftDataToArray(
          image,
          prevState.tempData.images
        );
        const images = removeDuplicateObjectInArrayByProperty(
          imagesArray,
          'path'
        );
        return {
          ...prevState.tempData,
          tempData: {
            images
          }
        };
      });
    }
  };

  onFormPostSubmitHandler = event => {
    event.preventDefault();
    let formData = new FormData();
    this.state.tempData.images.map(image => {
      return formData.append('images[]', image.data);
    });
    if (isCreateType(this.props.type)) {
      const post = {
        ...this.state.postForm
      };
      formData.append('post', JSON.stringify(post));
      return this.props.postCreateStart(formData);
    } else {
      const { name, id } = this.state.postFormEdit;
      this.props.postEditStart(id, { name });
    }
    this.onResetFormHandler();
  };

  onResetFormHandler = () => {
    isCreateType(this.props.type)
      ? this.setState(prevState => ({
          postForm: {
            ...postForm
          }
        }))
      : this.setState(prevState => ({
          postFormEdit: {
            ...postForm
          }
        }));
  };
  onResetButtonClicked = () => {
    this.onResetFormHandler();
  };

  render() {
    return (
      <form
        onSubmit={this.onFormPostSubmitHandler}
        className="Post-form border rounded-0 p-3 pb-0 m-3"
      >
        <div className="form-group d-flex justify-content-between border-bottom p-2 m-0">
          <h5 className="text-uppercase">
            {renderTypeString(this.props.type)} post form
          </h5>

          <Button
            type="reset"
            className="btn btn-sm btn-warning mx-1"
            clicked={this.onResetButtonClicked}
          >
            reset
          </Button>
        </div>

        <div className="form-group mb-0">
          <HelpText className="Post-form__notice--height m-0 mb-2">
            {(isCreateType(this.props.type)
              ? this.state.postForm.isValidTitle !== null &&
                !this.state.postForm.isValidTitle
              : this.state.postFormEdit.isValidTitle !== null &&
                !this.state.postFormEdit.isValidTitle) &&
              helpTextRequire(
                'post title',
                'alphabet and at least 5 characters'
              )}
          </HelpText>
          <div className="input-group">
            <Input
              type="text"
              className={[
                'form-control',
                addInputValidClass(
                  isCreateType(this.props.type)
                    ? this.state.postForm.isValidTitle
                    : this.state.postFormEdit.isValidTitle
                )
              ].join(' ')}
              placeholder="Title ..."
              value={
                isCreateType(this.props.type)
                  ? this.state.postForm.title
                  : this.state.postFormEdit.title
              }
              onChange={this.onInputTitlePostChangeHandler}
              autoFocus
            />
          </div>
        </div>

        <div className="form-group mb-0">
          <HelpText className="Post-form__notice--height m-0 mb-2">
            {(isCreateType(this.props.type)
              ? this.state.postForm.isValidDescription !== null &&
                !this.state.postForm.isValidDescription
              : this.state.postFormEdit.isValidDescription !== null &&
                !this.state.postFormEdit.isValidDescription) &&
              helpTextRequire(
                'post description',
                'alphabet and at least 5 characters'
              )}
          </HelpText>
          <div className="input-group">
            <TextArea
              className={[
                'form-control rounded-0',
                addInputValidClass(
                  isCreateType(this.props.type)
                    ? this.state.postForm.isValidDescription
                    : this.state.postFormEdit.isValidDescription
                )
              ].join(' ')}
              placeholder="Description ..."
              value={
                isCreateType(this.props.type)
                  ? this.state.postForm.description
                  : this.state.postFormEdit.description
              }
              onChange={this.onInputDescriptionPostChangeHandler}
            />
          </div>
        </div>

        <div className="form-group mb-0">
          <HelpText className="Post-form__notice--height m-0 mb-2">
            {/* {(isCreateType(this.props.type)
              ? this.state.postForm.isValidDescription !== null &&
                !this.state.postForm.isValidDescription
              : this.state.postFormEdit.isValidDescription !== null &&
                !this.state.postFormEdit.isValidDescription) &&
              helpTextRequire(
                'post description',
                'alphabet and at least 5 characters'
              )} */}
          </HelpText>
          <div className="input-group">
            <div className="input-group-prepend">
              {/* <Button type="button" id="">
                Upload
              </Button> */}
            </div>
            <div className="custom-file">
              <Input
                type="file"
                style={{ zIndex: '99' }}
                className={[
                  'custom-file-input form-control rounded-0'
                  // addInputValidClass(
                  //   isCreateType(this.props.type)
                  //     ? !!this.state.postForm.image
                  //     : !!this.state.postFormEdit.image
                  // )
                ].join(' ')}
                // value={
                //   isCreateType(this.props.type)
                //     ? this.state.postForm.image
                //     : this.state.postFormEdit.image
                // }
                onChange={this.onInputImageUploadPostChangeHandler}
                id="post-image"
                ariaDescribedby="post-image"
              />
              <label className="custom-file-label" htmlFor="post-image">
                Image
              </label>
            </div>
          </div>
        </div>

        {this.state.tempData.images && (
          <div className="d-flex flex-row my-2 Post-form__image">
            {Object.keys(this.state.tempData.images).map((key, index) => {
              const image = this.state.tempData.images[key];

              return (
                <Figure
                  alt=""
                  src={image.path}
                  key={index + 1}
                  caption={image.data.name}
                  main={index === 0}
                  onClickedRemoveImage={_ =>
                    this.onButtonRemoveImageClickHandler(image.path)
                  }
                  onClickedMakeMainImage={_ =>
                    this.onButtonMakeMainImageClickHandler(image, index)
                  }
                />
              );
            })}
          </div>
        )}
        <div className="form-group mb-0">
          <HelpText className="Post-form__notice--height m-0 mb-2" />
          <div className="input-group">
            <EditorComponent
              onUpdateTextEditor={this.onInputTextEditorPostChangeHandler}
            />
          </div>
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
            clicked={this.props.onFormToggleClicked}
          >
            cancel
          </Button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postCreateStart: post => dispatch(postCreateStart(post))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(index);
