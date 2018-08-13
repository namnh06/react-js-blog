import React, { Fragment } from 'react';

import Wrapper from './Wrapper';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import Form from './Form';
class index extends React.Component {
  state = {
    signUpForm: false,
    logInForm: false
  };
  onButtonScrollTopClickHandler = () => {
    window.scrollTo(0, 0);
  };

  onButtonSignUpClickHandler = _ => {
    this.setState(prevState => ({
      signUpForm: !prevState.signUpForm
    }));
  };

  onButtonLogInClickHandler = _ => {
    this.setState(prevState => ({
      logInForm: !prevState.logInForm
    }));
  };

  render() {
    return (
      <Fragment>
        {this.state.signUpForm && (
          <Form
            type="signup"
            onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
          />
        )}
        {this.state.logInForm && (
          <Form
            type="login"
            onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
          />
        )}
        <Header
          onButtonSignUpClicked={_ => this.onButtonSignUpClickHandler()}
          onButtonLogInClicked={_ => this.onButtonLogInClickHandler()}
        />
        <Wrapper {...this.props} />
        <Footer />
        <ScrollTop clicked={_ => this.onButtonScrollTopClickHandler()} />
      </Fragment>
    );
  }
}

export default index;
