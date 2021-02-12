import React, { Component } from "react";
import Burger from "../../components/burger/burger";
//buttons
import Buttonn from "../../components/UI/buttons/button";
import ContactForm from "../checkoutForm/moreinside/checkoutForm";
//route
import { Route, Switch } from "react-router-dom";
import Spinner from "../../components/UI/spinner/spinner";

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

    // const query = new URLSearchParams(this.props.location.search);
    // const ingres = {};
    // let prices = 0;
    // for (let param of query.entries()) {
    //   if (param[0] === "price") {
    //     prices = param[1];
    //   } else {
    //     ingres[param[0]] = +param[1];
    //   }
    // }
    // this.setState({ ingredients: ingres, price: prices });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <br />
          <br />
          <br />

          <Burger ingredients={this.state.ingredients} />
          <Buttonn color={"green"} clickedd={() => this.handleContactForm()}>
            Contact Form
          </Buttonn>
          <Buttonn clickedd={() => this.handleCancel()}>Cancel</Buttonn>

          <Route
            path={this.props.match.path + "/contact-form"}
            //or
            // path={"/checkout/contact-form"}
            exact
            render={() => <ContactForm names={"lions"} />}
          />
        </div>
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

//  {/* <Route to="/checkout/contact-form" component={ContactForm} /> */}
//  <Route
//  path={this.props.match.path + "/contact-data"}
//  // component={ContactForm}
//  render={() => (
//    <ContactForm
//      ingredients={this.state.ingredients}
//      price={this.state.price}
//    />
//  )}
// />
// </div>
// );
// }
// handleOrderCheckout = () => {
// this.props.history.replace("/checkout/contact-data");
// };
