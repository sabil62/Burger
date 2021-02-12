import React, { Component } from "react";
import Burger from "../../components/burger/burger";
//buttons
import Buttonn from "../../components/UI/buttons/button";
// import ContactForm from "../checkoutForm/checkoutForm";
import CheckoutSummary from "../../components/checkoutSummary/checkoutSummary";
// import ContactForms from "../checkoutForm/checkoutFormAnother/contactForm";
import ContactFormss from "./checkoutForms/contactForms";
//Route
import { Route } from "react-router-dom";
//axios
import axios from "../../axios-gen";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: null,
  };
  componentWillMount() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    let prices = 0;
    let ingre = {};
    for (let params of query.entries()) {
      if (params[0] == "price") {
        prices = params[1];
      } else {
        ingre[params[0]] = +params[1]; //as this is string so need to convert to number
      }
    }
    this.setState({ price: prices, ingredients: ingre });
  }
  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <Buttonn color={"green"} clickedd={() => this.handleContactForm()}>
          Contact Form
        </Buttonn>
        <Buttonn clickedd={() => this.handleCancel()}>Cancel</Buttonn>
        <button onClick={() => this.handleSubmission()}>Pinch to submit</button>

        {/* Either this or above (Both works) */}

        {/* <CheckoutSummary
          ingredients={this.state.ingredients}
          handleContactForm={() => this.handleContactForm()}
          handleCancel={() => this.handleCancel()}
        /> */}
        {/* ---------------------------------- This <Route/> didnt work-------------------------------- */}
        {/* 
        <Route
          path={this.props.match.path + "/contact-form"}
          //or
          // path={"/checkout/contact-form"}
          component={withRouter(ContactForm)}
          // render={() => <ContactForm names={"lions"} />}
        /> */}
        {/* <Route
          path={this.props.match.path + "/contact-form"}
          render={() => (
            <ContactFormss
              ingredients={this.state.ingredients}
              tiger={"tiger"}
            />
          )}
        /> */}
        <Route
          path={this.props.match.path + "/contact-form"}
          // component={ContactForm}
          render={() => <ContactFormss ingredients={this.state.ingredients} />}
        />
      </React.Fragment>
    );
  }
  handleContactForm = () => {
    this.props.history.replace("/checkout/contact-form");
    //there is no <route to="contact-form"> until  now
  };
  handleCancel = () => {
    this.props.history.goBack();
    //you can use redirect also google search for it like react redirect
  };
  handleSubmission = () => {
    const poster = { lion: "tiger" };

    axios.post("/orders23.json", poster).then((response) => {
      console.log(response.data);
    });
  };
}

export default Checkout;
