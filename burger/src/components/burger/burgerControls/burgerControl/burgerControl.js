import React from "react";
import "./burgerControl.css";

const burgerControl = (props) => {
  return (
    <div className="burgerControl">
      <div className="insideButtonControl">
        <span style={{ textTransform: "capitalize", fontWeight: 700 }}>
          {props.type}
        </span>
        <span className="controlButton add" onClick={props.onAdd}>
          Add
        </span>
        <button
          className={
            props.disables
              ? "controlButton subtract-disable"
              : "controlButton subtract"
          }
          onClick={props.onSubtract}
          disabled={props.disables}
          // disabled={props.onNegativeIngredients}
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default burgerControl;
