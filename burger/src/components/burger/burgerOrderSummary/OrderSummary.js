import React from "react";
import Buttonn from "../../UI/buttons/button";

const orderSummary = (props) => {
  let ingres = [];
  for (let name in props.ingredients) {
    ingres.push({ ingresName: name, amount: props.ingredients[name] });
  }
  let display = ingres.map((orders) => (
    <div>
      <span>{orders.ingresName}</span>
      :-
      <span>{orders.amount}</span>
    </div>
  ));
  return (
    <div>
      <h3>Here are your orders!</h3>
      {display}
      <h4>Total price is: {props.price.toFixed(2)}</h4>

      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Buttonn color={"green"}>Order</Buttonn>
        <Buttonn>Cancel</Buttonn>
      </div>
    </div>
  );
};

export default orderSummary;
