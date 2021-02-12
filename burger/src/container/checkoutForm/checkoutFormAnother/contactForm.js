import React, { Component } from "react";
import Input from "../../../components/UI/input/input";
import "../contactForm.css";
//axios

class ContactForms extends Component {
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
        //new method for value
        changed={(event) => this.handleValue(event, types.methodName)}
      />
    ));
    return (
      <div>
        <br />
        <br />
        <br />
        <br /> <br />
        <h1>Contact form page</h1>
        <h1>{this.props.tiger}</h1>
        <form onSubmit={() => this.handleSubmit()}>
          <div className="ContactForm">
            <div className="ContactFormInner">{displayInput}</div>
            <button style={{ padding: 12 }}>Submit Form</button>
          </div>
        </form>
      </div>
    );
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //to post we have to have some contents
    const post = {
      ingredients: this.props.ingredients,
    };

    // axios.post();
  };
  handleValue = (event, name) => {
    const newValue = { ...this.state.orderForm };
    //taking right side only
    const updatedValue = { ...newValue[name] };
    updatedValue.value = event.target.value;
    newValue[name] = updatedValue;
    this.setState({ orderForm: newValue });
  };
}

export default ContactForms;
