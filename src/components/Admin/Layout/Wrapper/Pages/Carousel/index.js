import React from 'react';
import Icon from '../../../../../UI/Icon';
import SlideForm from './SlideForm';
import Title from '../Components/Title';
import Button from '../../../../../UI/Button';
import { connect } from 'react-redux';
import {
  SLIDE_CREATE_START,
  SLIDE_EDIT_START
} from '../../../../../../helpers/constants';
import { iconClass, isValidName } from '../../../../../../helpers';
import ListSlides from '../Components/List';
import Header from '../Components/Header';
import { slideDeleteStart } from '../../../../../../store/actions/slides.action';

class index extends React.Component {
  onButtonDeleteClickHandler = id => {
    this.props.slideDeleteStart(id);
  };

  onButtonEditClickHandler = slide => {
    const { id, name, caption, images } = slide;

    this.setState(prevState => {
      return {
        ...prevState,
        slideFormEdit: {
          id,
          name,
          isValidName: isValidName(name),
          caption,
          isValidCaption: isValidName(caption),
          images
        }
      };
    });
    this.props.onFormEditToggleClicked(true);
  };
  render() {
    return (
      <div className="mt-5 border border-style-custom ">
        <div className="d-flex justify-content-between align-items-center border-bottom p-3">
          <Title className="mb-0 font-weight-bold">{this.props.page}</Title>
          <Button
            className="btn-sm btn-info"
            clicked={this.props.onFormToggleClicked}
          >
            <Icon
              iconClass={iconClass(this.props.formToggle ? 'minus' : 'plus')}
              className="text-white"
            />
          </Button>
        </div>

        {/* form create */}

        {this.props.formToggle && (
          <SlideForm
            type={SLIDE_CREATE_START}
            page={this.props.page}
            onFormToggleClicked={this.props.onFormToggleClicked}
          />
        )}

        {this.props.formEditToggle && (
          <SlideForm
            type={SLIDE_EDIT_START}
            page={this.props.page}
            onFormEditToggleClicked={this.props.onFormEditToggleClicked}
            slideFormEdit={this.state.slideFormEdit}
          />
        )}

        <div className="m-3">
          <ul className="list-unstyled">
            <Header
              page={this.props.page}
              className={!!this.props.slides ? '' : 'border-bottom-0'}
            />

            {!!this.props.slides.data &&
              !!this.props.slides.data.length &&
              Object.keys(this.props.slides.data).map((key, index) => {
                const slide = this.props.slides.data[key];

                return (
                  <ListSlides
                    page={this.props.page}
                    key={index}
                    index={index + 1}
                    last={index === this.props.slides.data.length - 1}
                    onButtonDeleteClicked={_ =>
                      this.onButtonDeleteClickHandler(slide.id)
                    }
                    onButtonEditClicked={_ => {
                      this.onButtonEditClickHandler(slide);
                    }}
                    {...slide}
                  />
                );
              })}
          </ul>
          {/* onSubmit={event => this.onSubmitHandler(event)} */}
          {/* {!!this.props.slides.data && (
            <Slides slides={this.props.slides.data} />
          )} */}
          {/* <div className="form-group">
            <Button className="btn btn-primary rounded-0" type="submit">
              Save
            </Button>
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    slides: state.slides.current
  };
};

const mapDispatchToProps = dispatch => {
  return {
    slideDeleteStart: id => dispatch(slideDeleteStart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
