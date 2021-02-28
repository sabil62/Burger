import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//redux
import { connect } from "react-redux";

class Logout extends Component {
  componentDidMount() {
    this.props.onInitialLogout();
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialLogout: () => dispatch({ type: "LOGOUT" }),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
