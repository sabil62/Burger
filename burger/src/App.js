import "./App.css";
import BurgerBuilder from "./container/burgerBuilder/burgerBuilder";
import { Route } from "react-router-dom";
import Layouts from "./container/layout/layout";
import Order from "./container/order/order";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Layouts />
      </Route>
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/order" component={Order} />
      {/* this exact means if route is /lion then <burgerBuilder/> wont display but <Layouts/> will */}
      {/* we can do both above techniques <Route pahtcomponent={Layouts}/> */}
    </div>
  );
}

export default App;
