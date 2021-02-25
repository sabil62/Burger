import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//VVI step
import { BrowserRouter } from "react-router-dom";

import burger_reducer from "./store/reducer/burger_reducer";

import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(burger_reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
