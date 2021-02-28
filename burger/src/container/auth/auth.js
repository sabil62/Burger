import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../../components/UI/input/input";

import Buttonn from "../../components/UI/buttons/button";
import * as actionCreation from "../../store/actionCreation/authAction";

import "./auth.css";

class Auth extends Component {
  state = {
    isSingedIn: true,
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Mail Address",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSingedIn
    );
  };

  handleSignClick = () => {
    this.setState((prevState) => {
      return { isSingedIn: !prevState.isSingedIn };
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    var form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    // if (this.props.loading) {
    //   form = <Spinner />;
    // }
    // let errors = null;
    // if (this.props.error) {
    //   errors = <p>{this.props.error.message}</p>;
    // }
    // let redirect = null;
    // if (this.props.token) {
    //   redirect = <Redirect to="/" />;
    // }

    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        {this.state.isSingedIn
          ? "You have account So Sing IN"
          : "Please make account"}
        <br />
        <button onClick={() => this.handleSignClick()}>
          Switch to {this.state.isSingedIn ? "SingUp" : "SingIn"}
        </button>
        <div className="Auth">
          <form onSubmit={this.submitHandler}>
            {form}

            {/* <Buttonn>SIGNUP</Buttonn> */}
            {this.state.isSingedIn ? (
              <button>Sing In</button>
            ) : (
              <button>SingUP</button>
            )}
          </form>

          {/* {redirect}
        {errors}
        <form onSubmit={this.submitHandler}>
          {form}
          <Buttonn type="Success">SUBMIT</Buttonn>
        </form>
        {this.state.isSingedIn
          ? "We assumed you have account, if you dont have account singup"
          : "Okay SingUp first (next time direct singin)"}
        <br />
        <Buttonn type="Danger" onClickedd={() => this.handleSignClick()}>
          {" "}
          Switch to {this.state.isSingedIn ? "SingUP" : "SingIN"}
          {/* understand  if signed in then should display singup in other */}
          {/* </Buttonn> */}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // loading: state.auth.loading,
    // error: state.auth.error,
    // token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSingedIn) =>
      dispatch(actionCreation.fetch_order(email, password, isSingedIn)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
