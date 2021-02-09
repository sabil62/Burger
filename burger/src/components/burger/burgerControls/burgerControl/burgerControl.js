import React from "react";
import "./burgerControl.css";

const burgerControl = (props) => {
  return (
    <div className="burgerControl">
      <div className="insideButtonControl">
        <span style={{ textTransform: "capitalize", width: "120px" }}>
          {props.type}
        </span>
        <span className="controlButton add">Add</span>
        <span className="controlButton subtract">Subtract</span>
      </div>
    </div>
  );
};

export default burgerControl;
