import "./App.css";
import BurgerBuilder from "./container/burgerBuilder/burgerBuilder";
import { Route } from "react-router-dom";
import Layouts from "./container/layout/layout";
import Orders from "./container/order/orders";
import Checkout from "./container/checkout/checkout";
import Auth from "./container/auth/auth";
import Logout from "./container/logout/logout";
// import ContactForm from "./container/checkoutForm/checkoutForm";
// import ContactForms from "./container/checkoutForm/checkoutFormAnother/contactForm";
// import ContactFormss from "./container/checkout/checkoutForms/contactForms";

import React, { Component } from "react";
import * as actionCreation from "./store/actionCreation/authAction";

//redux
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuthValue_localStorage();
  }
  render() {
    return (
      <div className="App">
        <Route path="/">
          <Layouts />
        </Route>
        <Route path="/" exact component={BurgerBuilder} />
        {/* this exact means if route is /lion then <burgerBuilder/> wont display but <Layouts/> will */}
        {/* we can do both above techniques <Route pahtcomponent={Layouts}/> */}
        <Route path="/order" component={Orders} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        {/* <Route path="/checkout/contact-form" component={ContactFormss} /> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuthValue_localStorage: () =>
      dispatch(actionCreation.checklocalauth()),
  };
};

export default connect(null, mapDispatchToProps)(App);
