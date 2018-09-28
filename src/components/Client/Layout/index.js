import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import Form from './Form';
import withErrorHandler from '../../../hoc/withErrorHandler';
import axios from '../../../helpers/axios.config';
import { informationFetchStart } from '../../../store/actions/information.action';
import { menusFetchStart } from '../../../store/actions/menus.action';
import { slidesRandFetchStart } from '../../../store/actions/slides.action';
class index extends React.Component {
  state = {
    signUpForm: false,
    logInForm: false
  };

  componentDidMount() {
    this.props.informationFetchStart();
    this.props.menusFetchStart();
    this.props.slidesRandFetchStart();
  }

  onButtonScrollTopClickHandler = () => {
    window.scrollTo(0, 0);
  };

  onButtonSignUpClickHandler = _ => {
    this.setState(prevState => ({
      signUpForm: !prevState.signUpForm,
      logInForm: false
    }));
  };

  onButtonLogInClickHandler = _ => {
    this.setState(prevState => ({
      signUpForm: false,
      logInForm: !prevState.logInForm
    }));
  };

  onEscapeButtonPressHandler = () => {
    this.setState({
      signUpForm: false,
      logInForm: false
    });
  };

  render() {
    return !!this.props.information.length ? (
      <Fragment>
        {this.state.signUpForm && (
          <Form
            type="signup"
            onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
            onEscapeButtonPressed={_ => this.onEscapeButtonPressHandler()}
            onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
          />
        )}
        {this.state.logInForm && (
          <Form
            type="login"
            onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
            onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
            onEscapeButtonPressed={_ => this.onEscapeButtonPressHandler()}
          />
        )}
        {!!this.props.information.length && (
          <Header
            onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
            onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
            information={this.props.information}
          />
        )}
        <Wrapper
          {...this.props}
          onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
          onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
        />
        {!!this.props.information.length && (
          <Footer
            onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
            onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
            information={this.props.information}
          />
        )}
        <ScrollTop clicked={_ => this.onButtonScrollTopClickHandler()} />
      </Fragment>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    information: state.information,
    menus: state.menus,
    slide: state.slides.show
  };
};
const mapDispatchToProps = dispatch => {
  return {
    informationFetchStart: () => dispatch(informationFetchStart()),
    menusFetchStart: () => dispatch(menusFetchStart()),
    slidesRandFetchStart: _ => dispatch(slidesRandFetchStart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(index, axios));
