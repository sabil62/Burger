import React, { Component } from "react";
import axios from "../../axios-gen";
import Order from "./order/order";
import Spinner from "../../components/UI/spinner/spinner";

class Orders extends Component {
  state = {
    dataFromFire: null,
    load: false,
  };
  componentDidMount() {
    axios
      .get("orders.json")
      .then((response) => {
        console.log(response.data);
        let fetchedData = [];
        for (let key in response.data) {
          fetchedData.push({ ...response.data[key], key: key });
        }
        this.setState({ dataFromFire: fetchedData, load: true });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let display = <Spinner />;
    if (this.state.load) {
      display = this.state.dataFromFire.map((order) => (
        <Order key={order.key} ingredients={order.ingredients} />
      ));
    }
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        {display}
      </React.Fragment>
    );
  }
}

export default Orders;
