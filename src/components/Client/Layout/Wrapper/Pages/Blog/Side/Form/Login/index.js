import React from 'react';
import FakeLink from '../../../../../../../../Details/FakeLink';
class index extends React.Component {
  onFormSubmitHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form
        action=""
        onSubmit={this.onFormSubmitHandler}
        className="rounded-0 border mb-3"
      >
        <div className="form-group m-0 d-flex justify-content-center align-items-center border-bottom bg-yellow-cz-custom">
          <h3 className="text-center my-3 text-uppercase">Sign In</h3>
        </div>

        <div className="form-group row m-3">
          <div className="input-group">
            <input
              type="email"
              className="form-control rounded-0"
              id="email"
              placeholder="Email ..."
            />
          </div>
        </div>
        <div className="form-group row m-3">
          <div className="input-group">
            <input
              type="password"
              className="form-control rounded-0"
              id="password"
              placeholder="Password ..."
            />
          </div>
        </div>

        <div className="form-group d-flex justify-content-between m-3 pb-3 border-bottom">
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input position-relative"
              type="checkbox"
              name=""
              id="js-remember-me"
            />
            <label
              className="mb-0 Default--font-size-1-3"
              htmlFor="js-remember-me"
            >
              Remember Me
            </label>
          </div>
          <button className="btn btn-sm bg-yellow-cz-custom border rounded-0">
            Log In
          </button>
        </div>

        <div className="form-group row m-3 d-flex justify-content-between">
          <FakeLink className="text-muted">Forget password ?</FakeLink>
          <FakeLink
            className="text-muted"
            clicked={this.props.onButtonSignUpClicked}
          >
            Wanna Sign Up ?
          </FakeLink>
        </div>
      </form>
    );
  }
}

export default index;
