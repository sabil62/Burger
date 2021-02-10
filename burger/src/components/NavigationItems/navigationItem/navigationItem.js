import React from "react";
import "./navigationItem.css";

const navigationItem = (props) => {
  return <div className="navigationItem">{props.children}</div>;
};

export default navigationItem;
