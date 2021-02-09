import React, { Component } from "react";
import Burger from "../../components/burger/burger";
//burgerBuilder
import BurgerControls from "../../components/burger/burgerControls/burgerControls";
//modal
import Modal from "../../components/UI/modal/modal";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 3,
      bacon: 1,
      meat: 1,
      cheese: 1,
    },
    showModal: false,
  };
  render() {
    const disable = { ...this.state.ingredients };
    for (let name in disable) {
      disable[name] = disable[name] <= 0;
    }
    let modal = this.state.showModal ? (
      <Modal onFalse={() => this.handleModalFalse()}>Lion tiger leopard</Modal>
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
    this.setState({ ingredients: ingre });
  };
  handleSubtract = (name) => {
    const ingre = { ...this.state.ingredients };
    ingre[name]--;
    this.setState({ ingredients: ingre });
  };
}

export default BurgerBuilder;
