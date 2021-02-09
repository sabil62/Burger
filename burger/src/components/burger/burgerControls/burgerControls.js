import React from "react";

import BurgerControl from "./burgerControl/burgerControl";
import "./burgerControls.css";

const burgerControls = (props) => {
  let totalIngredients = [];
  for (let name in props.ingredients) {
    totalIngredients.push({ ingredName: name });
  }
  let ingreds = totalIngredients.map((names) => (
    <BurgerControl
      key={names.ingredName}
      type={names.ingredName}
      onAdd={() => props.onAdd(names.ingredName)}
      onSubtract={() => props.onSubtract(names.ingredName)}
      disables={props.disables[names.ingredName]}
      // onNegativeIngredients={props.onNegativeIngredients(names.ingredName)}
    />
  ));
  return (
    <div className="burgerControlss">
      {ingreds}
      <button
        className="order-now"
        disabled={false}
        onClick={props.onModalTrue}
      >
        Order
      </button>
    </div>
  );
};

export default burgerControls;
