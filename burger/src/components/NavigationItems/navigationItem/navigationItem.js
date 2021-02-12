import React from "react";
import "./navigationItem.css";

const navigationItem = (props) => {
  let color;
  if (props.link == "/") {
    color = "yellow";
  } else {
    color = "wheat";
  }
  return (
    <div className="navigationItem" style={{ color: "red" }}>
      {props.children}
    </div>
  );
};

export default navigationItem;
