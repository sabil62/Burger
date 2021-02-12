import React from "react";
import Burger from "../burger/burger";
import Buttonn from "../UI/buttons/button";

const checkoutSummary = (props) => {
  return (
    <div>
      <Burger ingredients={props.ingredients} />
      <Buttonn color={"green"} clickedd={props.handleContactForm}>
        Contact Form
      </Buttonn>
      <Buttonn clickedd={props.handleCancel}>Cancel</Buttonn>
    </div>
  );
};

export default checkoutSummary;
