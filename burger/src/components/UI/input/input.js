import React from "react";
import "./input.css";

const input = (props) => {
  let inputValue = null;
  switch (props.types) {
    case "input":
      inputValue = (
        <input
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputValue = (
        <textarea
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case "select":
      inputValue = (
        <select
          className="InputElement"
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((optionss) => (
            <option key={optionss.value} value={optionss.value}>
              {optionss.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputValue = (
        <input
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className="Input">
      <label className="Label">{props.name}</label>
      {inputValue}
    </div>
  );
};

export default input;
