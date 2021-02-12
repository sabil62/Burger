import React from "react";
import "./order.css";

const order = (props) => {
  let ingred = [];
  for (let name in props.ingredients) {
    ingred.push({ ingredName: name, amount: props.ingredients[name] });
  }
  let show = ingred.map((ingr) => (
    <div key={ingr.ingredName}>
      <span>
        {ingr.ingredName} :- {ingr.amount}
      </span>
    </div>
  ));
  return <div className="order">{show}</div>;
};

export default order;
