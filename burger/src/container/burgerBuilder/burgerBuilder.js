import React, { Component } from "react";
import Burger from "../../components/burger/burger";
//burgerBuilder
import BurgerControls from "../../components/burger/burgerControls/burgerControls";
//modal
import Modal from "../../components/UI/modal/modal";
//orderSummary
import OrderSummary from "../../components/burger/burgerOrderSummary/OrderSummary";

//axios
import axios from "../../axios-gen";
//spinner
import Spinner from "../../components/UI/spinner/spinner";

const ingredientPrice = {
  salad: 1.2,
  bacon: 2,
  meat: 2.4,
  cheese: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 11, //not in {} like ingredients //total price also comes from firebase
    showModal: false,

    loadSpinner: false,
    thingsLoaded: false,
    burgerLoaded: false,
  };
  componentDidMount() {
    console.log(this.props);
    this.setState({ burgerLoaded: false });
    axios
      .get("/ingredients.json")
      .then((response) => {
        console.log(response.data);
        this.setState({ ingredients: response.data, burgerLoaded: true });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ burgerLoaded: true });
      });
    //for price
    axios
      .get("/totalPrice.json")
      .then((response) => {
        this.setState({ totalPrice: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const disable = { ...this.state.ingredients };
    for (let name in disable) {
      disable[name] = disable[name] <= 0;
    }
    let burger = this.state.burgerLoaded ? (
      <Burger ingredients={this.state.ingredients} />
    ) : (
      <Spinner />
    );
    let orderSummarys = this.state.loadSpinner ? (
      <Spinner />
    ) : (
      <OrderSummary
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        onOrder={() => this.handleOrder()}
        onCancel={() => this.handleModalFalse()}
        onCheckout={() => this.handleCheckout()}
      />
    );
    if (this.state.thingsLoaded) {
      orderSummarys = <h1>Thank you for your Order!</h1>;
    }
    //for animation this should be avoided
    // let modal = this.state.showModal ? (
    //   <Modal
    //     onFalse={() => this.handleModalFalse()}
    //     showModal={this.state.showModal}
    //   >
    //     {orderSummarys}
    //   </Modal>
    // ) : null;
    return (
      <React.Fragment>
        {/* <Burger ingredients={this.state.ingredients} /> */}
        {burger}
        <BurgerControls
          ingredients={this.state.ingredients}
          onAdd={this.handleAdd}
          onSubtract={this.handleSubtract}
          disables={disable}
          onModalTrue={() => this.handleModalTrue()}
        />
        <Modal
          onFalse={() => this.handleModalFalse()}
          showModal={this.state.showModal}
        >
          {orderSummarys}
        </Modal>
      </React.Fragment>
    );
  }
  handleCheckout = () => {
    let send = [];
    for (let name in this.state.ingredients) {
      send.push(
        encodeURIComponent(name) +
          "=" +
          encodeURIComponent(this.state.ingredients[name])
      );
    }
    send.push("price=" + this.state.totalPrice);
    const queryParams = send.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryParams,
    });
  };

  handleOrder = () => {
    this.setState({ loadSpinner: true, thingsLoaded: false });
    const post = {
      ingredients: this.state.ingredients,
      customer: {
        name: "lion",
        address: {
          street: "calina",
          country: "new",
        },
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", post)
      .then((response) => {
        console.log(response.data);
        this.setState({ loadSpinner: false, thingsLoaded: true });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loadSpinner: false });
      });
  };

  handleModalTrue = () => {
    this.setState({ showModal: true });
  };
  handleModalFalse = () => {
    this.setState({ showModal: false });
    this.setState({ thingsLoaded: false });
  };

  // handleNegativeIngredients = (name) => {
  //   const disable = { ...this.state.ingredients };
  //   return disable[name] <= 1;
  // };
  handleAdd = (name) => {
    const ingre = { ...this.state.ingredients };
    ingre[name]++;
    // this.setState({ ingredients: ingre });
    //for price
    const oldPrice = this.state.totalPrice; //no {...this.} bcoz totalPrice is not in {}
    const newPrice = oldPrice + ingredientPrice[name];
    this.setState({ ingredients: ingre, totalPrice: newPrice });
  };
  handleSubtract = (name) => {
    const ingre = { ...this.state.ingredients };
    ingre[name]--;
    // this.setState({ ingredients: ingre });
    //for price
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - ingredientPrice[name];
    this.setState({ ingredients: ingre, totalPrice: newPrice });
  };
}

export default BurgerBuilder;
