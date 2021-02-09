import React from "react";

import BurgerControl from "./burgerControl/burgerControl";
import "./burgerControls.css";

const burgerControls = (props) => {
  let totalIngredients = [];
  for (let name in props.ingredients) {
    totalIngredients.push({ ingredName: name });
  }
  let ingreds = totalIngredients.map((names) => (
    <BurgerControl key={names.ingredName} type={names.ingredName} />
  ));
  return <div className="burgerControlss">{ingreds}</div>;
};

export default burgerControls;
