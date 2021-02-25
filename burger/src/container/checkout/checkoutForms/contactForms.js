import React, { Component } from "react";
import Input from "../../../components/UI/input/input";
import "./contactForm.css";
//axios
import axios from "../../../axios-gen";
import Spinner from "../../../components/UI/spinner/spinner";

class ContactFormss extends Component {
  state = {
    loader: false,
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
    let form = (
      <form onSubmit={this.handleSubmit}>
        <h1>Contact form page</h1>
        <div className="ContactForm">
          <div className="ContactFormInner">{displayInput}</div>
          <button style={{ padding: 12 }}>Submit Form</button>
        </div>
      </form>
    );
    if (this.state.loader) {
      form = <Spinner />;
    }
    return form;
  }
  // handleSubmissions = () => {
  //   const poster = { lion: "tiger" };

  //   axios.post("/orders24.json", poster).then((response) => {
  //     console.log(response.data);
  //   });
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loader: true });
    const formValue = {};
    for (let names in this.state.orderForm) {
      formValue[names] = this.state.orderForm[names].value;
      //if formValue=[];
      //formValue.push({value:thi.state.orderForm[names].value})
    }
    const postData = {
      ingredient: this.props.ingredients,
      price: this.props.price,
      value: formValue,
      //value:formValue.value
    };
    const postdata = { lion: "lion" };
    axios
      .post("/orders22.json", postdata)
      .then((response) => {
        this.setState({ loader: false });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loader: false });
      });
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

export default ContactFormss;
