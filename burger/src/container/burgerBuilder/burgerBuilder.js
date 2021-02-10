import React, { Component } from "react";
import Burger from "../../components/burger/burger";
//burgerBuilder
import BurgerControls from "../../components/burger/burgerControls/burgerControls";
//modal
import Modal from "../../components/UI/modal/modal";
//orderSummary
import OrderSummary from "../../components/burger/burgerOrderSummary/OrderSummary";

const ingredientPrice = {
  salad: 1.2,
  bacon: 2,
  meat: 2.4,
  cheese: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 3,
      bacon: 1,
      meat: 1,
      cheese: 1,
    },
    showModal: false,
    totalPrice: 11, //not in {} like ingredients
  };

  render() {
    const disable = { ...this.state.ingredients };
    for (let name in disable) {
      disable[name] = disable[name] <= 0;
    }
    let modal = this.state.showModal ? (
      <Modal onFalse={() => this.handleModalFalse()}>
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
        />
      </Modal>
    ) : null;
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
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
  handleModalTrue = () => {
    this.setState({ showModal: true });
  };
  handleModalFalse = () => {
    this.setState({ showModal: false });
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
