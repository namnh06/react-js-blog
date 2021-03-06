import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import { updateValueInArrayByName } from '../../../../../../helpers';

import Title from '../Components/Title';
import Button from '../../../../../UI/Button';

import FormGroup from './FormGroup';
import { informationUpdateStart } from '../../../../../../store/actions/information.action';
import { slidesFetchStart } from '../../../../../../store/actions/slides.action';

const index = class extends Component {
  state = {
    information: [...this.props.information]
  };

  componentDidMount = () => {
    return this.props.slidesFetchStart();
  };

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => {
      return {
        information: [
          ...updateValueInArrayByName(prevState.information, { name, value })
        ]
      };
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const diff = this.state.information.filter((info, index) => {
      return info.value !== this.props.information[index].value;
    });
    this.props.updateStart(diff);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.information.length > 0) {
      this.setState({
        information: nextProps.information
      });
    }
  }

  render() {
    return (
      <Fragment>
        {/* INFORMATION SECTION */}
        {this.state.information.length > 0 && (
          <div className="mt-5 border border-style-custom ">
            <div className="d-flex justify-content-between align-items-center border-bottom p-3">
              <Title className="mb-0 font-weight-bold">
                Website's Information
              </Title>
            </div>
            <form
              className="m-3"
              onSubmit={event => this.onSubmitHandler(event)}
            >
              {Object.keys(this.state.information).map((key, index) => {
                const information = this.state.information[key];
                return (
                  <FormGroup
                    key={index}
                    name={information.name}
                    value={information.value}
                    changed={event => this.onInputChange(event)}
                  />
                );
              })}
              <div className="form-group">
                <Button className="btn btn-primary rounded-0" type="submit">
                  Save
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* CAROUSEL SECTION

        <Carousel
          page={this.props.page}
          formToggle={this.props.formToggle}
          onFormToggleClicked={this.props.onFormToggleClicked}
          formEditToggle={this.props.formEditToggle}
          // onFormEditToggleClicked={set =>
          //   this.onFormEditToggleClickHandler(set)
          // }
        /> */}
      </Fragment>
    );
  }
};

const mapStateToProps = state => {
  return {
    information: state.information
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStart: data => dispatch(informationUpdateStart(data)),
    slidesFetchStart: _ => dispatch(slidesFetchStart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
