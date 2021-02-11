import React, { Component } from "react";
import Burger from "../../components/burger/burger";
//burgerBuilder
import BurgerControls from "../../components/burger/burgerControls/burgerControls";
//modal
import Modal from "../../components/UI/modal/modal";
//orderSummary
import OrderSummary from "../../components/burger/burgerOrderSummary/OrderSummary";
import Toolbar from "../../components/UI/toolbar/toolbar";

//axios
import axios from "../../axios-gen";
//spinner
import Spinner from "../../components/UI/spinner/spinner";
import spinner from "../../components/UI/spinner/spinner";

const ingredientPrice = {
  salad: 1.2,
  bacon: 2,
  meat: 2.4,
  cheese: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: null, //not in {} like ingredients //even though price is 11
    showModal: false,

    showSideDrawer: false,
    loadSpinner: false,
    thingsLoaded: false,
    burgerLoaded: false,
  };
  componentDidMount() {
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
      />
    );
    if (this.state.thingsLoaded) {
      orderSummarys = <h1>Thank you for your Order!</h1>;
    }
    let modal = this.state.showModal ? (
      <Modal onFalse={() => this.handleModalFalse()}>{orderSummarys}</Modal>
    ) : null;
    return (
      <React.Fragment>
        <Toolbar
          showSideDrawer={this.state.showSideDrawer}
          onSideBarTrue={() => this.handleSideDrawerTrue()}
          onSideBarFalse={() => this.handleSideDrawerFalse()}
        />
        {/* <Burger ingredients={this.state.ingredients} /> */}
        {burger}
        <BurgerControls
          ingredients={this.state.ingredients}
          onAdd={this.handleAdd}
          onSubtract={this.handleSubtract}
          disables={disable}
          onModalTrue={() => this.handleModalTrue()}
        />
        {modal}
      </React.Fragment>
    );
  }
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

  handleSideDrawerTrue = () => {
    this.setState({ showSideDrawer: true });
  };
  handleSideDrawerFalse = () => {
    this.setState({ showSideDrawer: false });
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
