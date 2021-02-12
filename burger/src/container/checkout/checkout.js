import React, { Component } from "react";
import Burger from "../../components/burger/burger";
//buttons
import Buttonn from "../../components/UI/buttons/button";

import CheckoutSummary from "../../components/checkoutSummary/checkoutSummary";

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
}

export default Checkout;
