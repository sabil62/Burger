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
//redux
import { connect } from "react-redux";
import * as actionCreation from "../../store/actionCreation/burgerAction";
import * as actionCreations from "../../store/actionCreation/orderAction";

// const ingredientPrice = {
//   salad: 1.2,
//   bacon: 2,
//   meat: 2.4,
//   cheese: 1,
// };

class BurgerBuilder extends Component {
  state = {
    // ingredients: null,
    // totalPrice: 11, //not in {} like ingredients //total price also comes from firebase
    showModal: false,

    loadSpinner: false,
    thingsLoaded: false,
    burgerLoaded: false,
  };
  componentDidMount() {
    // console.log(this.props);
    // // this.setState({ burgerLoaded: false });
    this.props.initialFetchingFireBase();
    // // axios
    // //   .get("/ingredients.json")
    // //   .then((response) => {
    // //     console.log(response.data);
    // //     this.setState({ ingredients: response.data, burgerLoaded: true });
    // //   })
    // //   .catch((err) => {
    // //     console.log(err);
    // //     this.setState({ burgerLoaded: true });
    // //   });
    // //for price
    // // axios
    // //   .get("/totalPrice.json")
    // //   .then((response) => {
    // //     this.setState({ totalPrice: response.data });
    // //     console.log(response.data);
    // //   })
    // //   .catch((err) => {
    // //     console.log(err);
    // //   });
    // .
  }

  render() {
    const disable = { ...this.state.ingredients };
    for (let name in disable) {
      disable[name] = disable[name] <= 0;
    }
    let burger = this.props.ingreR ? (
      <Burger ingredients={this.props.ingreR} />
    ) : (
      <Spinner />
    );
    // let burger = <Burger ingredients={this.props.ingreR} />;
    let orderSummarys = this.props.loadSpinner ? (
      <Spinner />
    ) : (
      <OrderSummary
        ingredients={this.props.ingreR}
        price={this.props.priceR}
        onOrder={() => this.props.onPostOrder(this.props.ingreR)}
        onCancel={() => this.handleModalFalse()}
        onCheckout={() => this.handleCheckout()}
      />
    );
    if (this.props.thingsLoaded) {
      orderSummarys = <h1>Thank you for your Order!</h1>;
    }
    // .
    // //for animation this should be avoided
    // // let modal = this.state.showModal ? (
    // //   <Modal
    // //     onFalse={() => this.handleModalFalse()}
    // //     showModal={this.state.showModal}
    // //   >
    // //     {orderSummarys}
    // //   </Modal>
    // // ) : null;
    return (
      <React.Fragment>
        {/* <Burger ingredients={this.state.ingredients} /> */}
        {burger}
        <BurgerControls
          ingredients={this.props.ingreR}
          onAdd={this.props.onAddIngredient}
          onSubtract={this.props.onRemoveIngredient}
          disables={disable}
          onModalTrue={() => this.handleModalTrue()}
          price={this.props.priceR}
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
    // let send = [];
    // for (let name in this.state.ingredients) {
    //   send.push(
    //     encodeURIComponent(name) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredients[name])
    //   );
    // }
    // send.push("price=" + this.state.totalPrice);
    // const queryParams = send.join("&");
    // this.props.history.push({
    //   pathname: "/checkout",
    //   search: "?" + queryParams,
    // });
    this.props.history.push("/checkout");
  };

  // handleOrder = () => {
  //   this.setState({ loadSpinner: true, thingsLoaded: false });
  //   const post = {
  //     ingredients: this.state.ingredients,
  //     customer: {
  //       name: "lion",
  //       address: {
  //         street: "calina",
  //         country: "new",
  //       },
  //     },
  //     deliveryMethod: "fastest",
  //   };
  //   axios
  //     .post("/orders.json", post)
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({ loadSpinner: false, thingsLoaded: true });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       this.setState({ loadSpinner: false });
  //     });
  // };

  handleModalTrue = () => {
    this.setState({ showModal: true });
  };
  handleModalFalse = () => {
    this.setState({ showModal: false });
    this.setState({ thingsLoaded: false });
  };

  //   // handleNegativeIngredients = (name) => {
  //   //   const disable = { ...this.state.ingredients };
  //   //   return disable[name] <= 1;
  //   // };
  //   .
  // //   handleAdd = (name) => {
  // //     const ingre = { ...this.state.ingredients };
  // //     ingre[name]++;
  // //     // this.setState({ ingredients: ingre });
  // //     //for price
  // //     const oldPrice = this.state.totalPrice; //no {...this.} bcoz totalPrice is not in {}
  // //     const newPrice = oldPrice + ingredientPrice[name];
  // //     this.setState({ ingredients: ingre, totalPrice: newPrice });
  // //   };
  // //   handleSubtract = (name) => {
  // //     const ingre = { ...this.state.ingredients };
  // //     ingre[name]--;
  // //     // this.setState({ ingredients: ingre });
  // //     //for price
  // //     const oldPrice = this.state.totalPrice;
  // //     const newPrice = oldPrice - ingredientPrice[name];
  // //     this.setState({ ingredients: ingre, totalPrice: newPrice });
  // //   };
}

const mapStateToProps = (state) => {
  return {
    ingreR: state.burger.ingredients,
    priceR: state.burger.totalPrice,
    loadSpinner: state.order.loadSpinner,
    thingsLoaded: state.order.thingsLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialFetchingFireBase: () => dispatch(actionCreation.fetch_ingredients()),
    onAddIngredient: (ingreNam) =>
      dispatch(actionCreation.add_ingredients(ingreNam)),
    onRemoveIngredient: (ingreNam) =>
      dispatch(actionCreation.remove_ingredients(ingreNam)),
    onPostOrder: (ingre) => dispatch(actionCreations.post_order(ingre)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
