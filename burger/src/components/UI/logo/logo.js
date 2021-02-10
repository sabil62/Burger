import React from "react";

import BurgerLogo from "../../../assets/logo/burger-logo.png";
import "./logo.css";

const logo = (props) => {
  return <img src={BurgerLogo} className="logo" />;
};

export default logo;
