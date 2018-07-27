import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../../../../../../UI/Button';
import HelpText from '../Details/HelpText';
import Input from '../Details/Input';
import {
  categoryDeleteStart,
  categoryCreateStart
} from '../../../../../../../../../store/actions/admin/categories.action';
import { categoryForm } from '../../../../../../../../../helpers/seed-data';
import {
  isValidName,
  addInputValidClass,
  helpTextRequire
} from '../../../../../../../../../helpers';
import './styles.css';
class index extends React.Component {
  state = {
    categoryForm
  };

  onInputCategoryChange = event => {
    const name = event.target.value;
    this.setState(prevState => ({
      categoryForm: {
        ...prevState.categoryForm,
        name,
        isValidName: isValidName(name)
      }
    }));
  };

  onFormSubmittedHandler = event => {
    event.preventDefault();
    const { name } = this.state.categoryForm;
    this.props.categoryCreateStart({ name });
  };

  render() {
    return (
      <form
        onSubmit={this.onFormSubmittedHandler}
        className="Category-form border rounded-0 p-3 pb-0 m-3"
      >
        <div className="form-group d-flex justify-content-between border-bottom p-2 m-0">
          <h5 className="text-uppercase">{`CREATE ${this.props.page} FORM`}</h5>
          <Button
            type="reset"
            className="btn-sm btn-warning mx-1"
            clicked={this.props.onResetButtonClicked}
          >
            reset
          </Button>
        </div>

        <div className="form-group mb-0">
          <HelpText className="Category-form__notice--height mb-2">
            {this.state.categoryForm.isValidName !== null &&
              !this.state.categoryForm.isValidName &&
              helpTextRequire(
                'category name',
                'alphabet and at least 3 characters'
              )}
          </HelpText>
          <div className="input-group">
            <Input
              type="text"
              className={[
                'form-control',
                addInputValidClass(this.state.categoryForm.isValidName)
              ].join(' ')}
              placeholder="Name"
              value={this.state.categoryName}
              onChange={this.onInputCategoryChange}
              autoFocus
            />
          </div>
        </div>

        <div className="form-group d-flex justify-content-end mt-3">
          <Button
            type="submit"
            className={`btn-sm btn-success mx-1 ${
              !this.state.categoryForm.isValidName ? 'cursor-not-allowed' : ''
            }`}
            disabled={!!!this.state.categoryForm.isValidName}
          >
            save
          </Button>
          <Button
            type="button"
            className="btn-sm btn-danger mx-1"
            clicked={_ => this.props.onFormToggleClicked()}
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
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    categoryDeleteStart: id => dispatch(categoryDeleteStart(id)),
    categoryCreateStart: data => dispatch(categoryCreateStart(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
