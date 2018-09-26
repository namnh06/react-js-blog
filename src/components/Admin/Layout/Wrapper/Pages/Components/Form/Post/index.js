import React, { Component } from 'react';
import Input from '../../Form/Details/Input';
import Button from '../../../../../../../UI/Button';
import HelpText from '../../Form/Details/HelpText';
import { connect } from 'react-redux';
import Title from '../../../Components/Form/TitleForm';
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
  isPostValid
} from '../../../../../../../../helpers';
import { postForm, tempData } from '../../../../../../../../helpers/seed-data';
import {
  postCreateStart,
  postUpdateStart
} from '../../../../../../../../store/actions/posts.action';

import Figure from './Figure';

import CheckBox from '../../../../../../../UI/CheckBox';
import { categoriesFetchStart } from '../../../../../../../../store/actions/admin/categories.action';
import { HOST } from '../../../../../../../../helpers/constants';
class index extends Component {
  state = {
    isAddImageToEditor: null,
    postForm: {
      ...postForm
    },
    postFormEdit: {
      ...this.props.postFormEdit
    },
    isSaveButtonAllowed: null,
    tempData,
    content: null
  };

  componentDidMount() {
    if (!!this.props.postFormEdit) {
      const categories = this.props.postFormEdit.categories.map(category => {
        return category.id;
      });
      const nameCategories = this.props.postFormEdit.categories.map(
        category => {
          return category.name;
        }
      );
      const images = this.props.postFormEdit.images.map(image => {
        return {
          path: HOST + image.path,
          data: image
        };
      });

      this.setState(prevState => ({
        tempData: {
          ...prevState.tempData,
          categories,
          nameCategories,
          images
        }
      }));
    }
  }

  componentWillReceiveProps(nextProps) {
    return isCreateType(this.props.type)
      ? null
      : this.checkChangeFormEdit(nextProps);
  }

  checkChangeFormEdit = nextProps => {
    if (this.props.postFormEdit.id !== nextProps.postFormEdit.id) {
      this.setState(prevState => ({
        ...prevState,
        postFormEdit: {
          ...nextProps.postFormEdit
        }
      }));
    }
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
      this.setState(prevState => {
        const isSaveButtonAllowed =
          !!isValidTitle(title) &&
          !!isValidDescription(prevState.postFormEdit.description) &&
          !validator.isEmpty(prevState.postFormEdit.content);

        return {
          postFormEdit: {
            ...prevState.postFormEdit,
            title,
            isValidTitle: isValidTitle(title)
          },
          isSaveButtonAllowed
        };
      });
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
      this.setState(prevState => {
        const isSaveButtonAllowed =
          !!isValidDescription(description) &&
          !!isValidTitle(prevState.postFormEdit.title) &&
          !validator.isEmpty(prevState.postFormEdit.content);

        return {
          postFormEdit: {
            ...prevState.postFormEdit,
            description,
            isValidDescription: isValidDescription(description)
          },
          isSaveButtonAllowed
        };
      });
    }
  };

  onInputImageUploadPostChangeHandler = event => {
    const image = event.target.files[0];
    let reader = new FileReader();
    reader.onload = e => {
      const path = e.target.result;
      this.setState(prevState => {
        const isSaveButtonAllowed = isPostValid(
          isCreateType(this.props.type)
            ? prevState.postForm
            : prevState.postFormEdit
        );
        return {
          ...prevState,
          image,
          path,
          isSaveButtonAllowed
        };
      });
    };
    reader.readAsDataURL(image);
  };

  onButtonRemoveImageClickHandler = _ => {
    this.setState(prevState => {
      return {
        ...prevState,
        image: null,
        path: null
      };
    });
  };

  onCategoryClickHandler = event => {
    const options = event.target.selectedOptions;
    const categories = Object.keys(options).map((key, index) => {
      return options[key].value;
    });
    const nameCategories = Object.keys(options).map((key, index) => {
      return options[key].label;
    });
    this.setState(prevState => {
      return {
        tempData: {
          ...prevState.tempData,
          categories,
          nameCategories
        }
      };
    });
    if (isCreateType(this.props.type)) {
      return this.setState(prevState => {
        return {
          postForm: {
            ...prevState.postForm,
            categories
          }
        };
      });
    }
    return this.setState(prevState => {
      const isSaveButtonAllowed =
        !validator.isEmpty(prevState.postFormEdit.content) &&
        !!isValidDescription(prevState.postFormEdit.description) &&
        !!isValidTitle(prevState.postFormEdit.title);
      return {
        postFormEdit: {
          ...prevState.postFormEdit,
          categories
        },
        isSaveButtonAllowed
      };
    });
  };

  onInputTextEditorPostChangeHandler = html => {
    const content = html;
    if (isCreateType(this.props.type)) {
      return this.setState(prevState => {
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
    }

    this.setState(prevState => {
      const isSaveButtonAllowed =
        !validator.isEmpty(content) &&
        !!isValidDescription(prevState.postFormEdit.description) &&
        !!isValidTitle(prevState.postFormEdit.title);

      return {
        postFormEdit: {
          ...prevState.postFormEdit,
          content,
          isValidContent: !validator.isEmpty(content)
        },
        isSaveButtonAllowed
      };
    });

    return this.setState({
      isAddImageToEditor: false
    });
  };

  onFormPostSubmitHandler = event => {
    event.preventDefault();
    let formData = new FormData();

    formData.append('image', this.state.image);

    if (isCreateType(this.props.type)) {
      const post = {
        ...this.state.postForm
      };

      formData.append('post', JSON.stringify(post));

      this.props.createStart(formData);
      return this.props.onFormToggleClicked();
    }
    const post = {
      ...this.state.postFormEdit
    };
    this.state.postFormEdit.categories === this.props.postFormEdit.categories &&
      delete post.categories;
    console.log(post);
    formData.append('post', JSON.stringify(post));
    formData.append('_method', 'PUT');
    this.props.updateStart(post.id, formData);
    return this.props.onFormEditToggleClicked();
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
        className="Admin__Wrapper__Post__Form border rounded-0 p-3 pb-0 m-3"
      >
        <Title
          type={this.props.type}
          page={this.props.page}
          onResetButtonClick={this.onResetButtonClicked}
        />

        <div className="form-group mb-0">
          <HelpText className="Admin__Wrapper__Post__Form__notice--height m-0 mb-2">
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
          <HelpText className="Admin__Wrapper__Post__Form__notice--height m-0 mb-2">
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

        <div className="form-group d-flex mb-0">
          <div className="input-group d-flex flex-column justify-content-between w-25 mr-3">
            <HelpText className="Admin__Wrapper__Post__Form__notice--height m-0 mb-2" />
            <div className="mr-3 w-100 ">
              <span className="font-weight-bold">Category</span> : &nbsp;
              {!!this.state.tempData.nameCategories &&
                this.state.tempData.nameCategories.join(', ')}
              <select
                className="custom-select"
                multiple={true}
                value={this.state.tempData.categories}
                onChange={event => this.onCategoryClickHandler(event)}
              >
                {Object.keys(this.props.categories.data).map((key, index) => {
                  const category = this.props.categories.data[key];
                  return (
                    <CheckBox key={key} index={index + 1} id={category.id}>
                      {category.name}
                    </CheckBox>
                  );
                })}
              </select>
            </div>
            <HelpText>
              hold Ctrl + Left-Click to choose multiple selection
            </HelpText>
          </div>

          <div className="input-group d-flex flex-column justify-content-between w-25 mx-3">
            <div className="d-flex flex-row justify-content-center my-2 Admin__Wrapper__Post__Form__image">
              {!!this.state.image ? (
                <Figure
                  alt=""
                  src={this.state.path}
                  caption={this.state.image.name}
                  onClickedRemoveImage={_ =>
                    this.onButtonRemoveImageClickHandler()
                  }
                />
              ) : (
                'No Image Preview'
              )}
            </div>

            <HelpText>
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
                  className="custom-file-label Admin__Image__Preview__File__Label h-100 d-flex align-items-center"
                  htmlFor="post-image"
                >
                  Choose Image Preview
                </label>
              </div>
            </HelpText>
          </div>
        </div>

        <div className="form-group mb-0">
          <HelpText className="Admin__Wrapper__Post__Form__notice--height m-0 mb-2" />
          <div className="input-group">
            <EditorComponent
              content={
                isCreateType(this.props.type)
                  ? this.state.postForm.content
                  : this.state.postFormEdit.content
              }
              update={this.state.isAddImageToEditor}
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
  return {
    categories: state.categories.current
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStart: data => dispatch(postCreateStart(data)),
    categoriesFetchStart: _ => dispatch(categoriesFetchStart()),
    updateStart: (id, data) => dispatch(postUpdateStart(id, data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
