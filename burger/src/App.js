import "./App.css";
import BurgerBuilder from "./container/burgerBuilder/burgerBuilder";
import { Route } from "react-router-dom";
import Layouts from "./container/layout/layout";
import Orders from "./container/order/orders";
import Checkout from "./container/checkout/checkout";
// import ContactForm from "./container/checkoutForm/checkoutForm";
import ContactForms from "./container/checkoutForm/checkoutFormAnother/contactForm";
import ContactFormss from "./container/checkout/checkoutForms/contactForms";

function App() {
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
      {/* <Route path="/checkout/contact-form" component={ContactFormss} /> */}
    </div>
  );
}

export default App;
