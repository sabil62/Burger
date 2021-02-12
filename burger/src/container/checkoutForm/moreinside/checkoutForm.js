import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ContactForm extends Component {
  componentDidMount() {
    console.log(this.props);
    console.log(this.props.names);
  }
  state = {};
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br /> <br />
        Contact Form
        <h1>Contact form page</h1>
        <h1>Contact form page</h1>
        <h1>Contact form page</h1>
        <h1>Contact form page</h1> <h1>Contact form page</h1>
        <h1>Contact form page</h1>
        Contact Form
        <h1>Contact form page</h1>
        <h1>Contact form page</h1>
        <h1>Contact form page</h1>
        <h1>Contact form page</h1> <h1>Contact form page</h1>
        <h1>Contact form page</h1>
      </div>
    );
  }
}

export default withRouter(ContactForm);
