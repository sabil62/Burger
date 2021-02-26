import React, { Component } from "react";
import axios from "../../axios-gen";
import Order from "./order/order";
import Spinner from "../../components/UI/spinner/spinner";
import { connect } from "react-redux";
import * as actionCreation from "../../store/actionCreation/orderAction";

class Orders extends Component {
  state = {
    dataFromFire: null,
    load: false,
  };
  componentDidMount() {
    this.props.onInitialDataLoad();
    // // axios
    // //   .get("orders.json")
    // //   .then((response) => {
    // //     console.log(response.data);
    // //     let fetchedData = [];
    // //     for (let key in response.data) {
    // //       fetchedData.push({ ...response.data[key], key: key });
    // //     }
    // //     this.setState({ dataFromFire: fetchedData, load: true });
    // //   })
    // //   .catch((err) => console.log(err));
    // .
  }

  render() {
    let display = <Spinner />;
    if (this.props.loadeR) {
      display = this.props.dataFromFireR.map((order) => (
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

const mapStateToProps = (state) => {
  return {
    dataFromFireR: state.order.dataFromFire,
    loadeR: state.order.load,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialDataLoad: () => dispatch(actionCreation.fetch_order()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
