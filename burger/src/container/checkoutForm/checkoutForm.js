import React, { Component } from "react";
import Input from "../../components/UI/input/input";
import "./contactForm.css";

class ContactForm extends Component {
  state = {
    loaded: false,
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your name",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter your email",
        },
        value: "",
      },

      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your address",
        },
        value: "",
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your Zipcode",
        },
        value: "",
      },
      //this is different
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
    },
  };
  render() {
    //the above are same as the key from firebase MXZDJFKJDFK wala keys
    //so we use method same as that
    let postType = [];
    for (let name in this.state.orderForm) {
      postType.push({ methodName: name, ...this.state.orderForm[name] });
    }
    let displayInput = postType.map((types) => (
      <Input
        key={types.methodName}
        types={types.elementType}
        elementConfig={types.elementConfig}
        name={types.methodName}
        value={types.value}
      />
    ));
    return (
      <div>
        <br />
        <br />
        <br />
        <br /> <br />
        <h1>Contact form page</h1>
        <div className="ContactForm">
          <div className="ContactFormInner">{displayInput}</div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
