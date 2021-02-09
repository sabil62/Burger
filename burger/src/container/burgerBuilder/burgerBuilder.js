import React, { Component } from "react";
import Burger from "../../components/burger/burger";
//burgerBuilder
import BurgerControls from "../../components/burger/burgerControls/burgerControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 3,
      bacon: 1,
      meat: 1,
      cheese: 1,
    },
  };
  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls ingredients={this.state.ingredients} />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
