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
class index extends React.Component {
  state = {
    signUpForm: false,
    logInForm: false
  };

  componentDidMount() {
    // if (this.props.information.length === 0) {
    this.props.informationFetchStart();
    this.props.menusFetchStart();
    // }
    // if (this.props.menus.length === 0) {

    // }
    // if (!!localStorage.getItem('cz.visited')) {
    // const countVisited = parseInt(localStorage.getItem('cz.visited'), 10);
    // if (countVisited < 2) {
    // localStorage.setItem('cz.visited', '' + (countVisited + 1));
    // } else {
    // Math.random() * 10 > 8 && localStorage.setItem('cz.visited', '1');
    // }
    // } else {
    // localStorage.setItem('cz.visited', '1');
    // }
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
    menus: state.menus
  };
};
const mapDispatchToProps = dispatch => {
  return {
    informationFetchStart: () => dispatch(informationFetchStart()),
    menusFetchStart: () => dispatch(menusFetchStart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(index, axios));
