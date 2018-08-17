import React, { Fragment } from 'react';

import Wrapper from './Wrapper';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import Form from './Form';
import withErrorHandler from '../../../hoc/withErrorHandler';
import axios from '../../../helpers/axios.config';
class index extends React.Component {
  state = {
    signUpForm: false,
    logInForm: false
  };
  componentDidMount() {
    if (!!localStorage.getItem('cz.visited')) {
      const countVisited = parseInt(localStorage.getItem('cz.visited'), 10);
      if (countVisited < 2) {
        localStorage.setItem('cz.visited', '' + (countVisited + 1));
      } else {
        Math.random() * 10 > 8 && localStorage.setItem('cz.visited', '1');
      }
    } else {
      localStorage.setItem('cz.visited', '1');
    }
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
    return (
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
        <Header
          onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
          onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
        />
        <Wrapper
          {...this.props}
          onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
          onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
        />
        <Footer
          onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
          onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
        />
        <ScrollTop clicked={_ => this.onButtonScrollTopClickHandler()} />
      </Fragment>
    );
  }
}

export default withErrorHandler(index, axios);
