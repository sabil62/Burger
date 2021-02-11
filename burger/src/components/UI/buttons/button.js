import React from "react";
import "./button.css";

const buttonn = (props) => {
  let col = props.color == "green" ? "green" : "red";
  return (
    <span className="buttonn" style={{ color: col }} onClick={props.clickedd}>
      {props.children}
    </span>
  );
};

export default buttonn;
