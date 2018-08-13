import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';
class index extends React.Component {
  componentWillMount() {
    document.addEventListener('keydown', this.onEscapeButton);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscapeButton);
  }

  onEscapeButton = event => {
    if (event.keyCode === 27) {
      this.props.onButtonSignUpClicked();
    }
  };

  render() {
    const form = props => {
      switch (props.type) {
        case 'signup':
          return <SignUp {...props} />;
        case 'login':
          // TODO tomorrow
          return <LogIn {...props} />;
        default:
          return null;
      }
    };
    return (
      <div
        className="Client__Form"
        onKeyDown={event => this.onEscapeButton(event)}
        tabIndex="0"
      >
        {form(this.props)}
      </div>
    );
  }
}

export default index;
